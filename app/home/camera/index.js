import { useState, useEffect } from 'react';
import { Text, View, Button, Dimensions } from 'react-native';
import { StyleSheet } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Redirect, useRouter } from 'expo-router';
import * as Animatable from "react-native-animatable";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const overlayColor = "rgba(0,0,0,0.5)";

const rectDimensions = SCREEN_WIDTH * 0.65;
const rectBorderWidth = SCREEN_WIDTH * 0.005; // this is equivalent to 2 from a 393 device width
const rectBorderColor = "red";

const scanBarWidth = SCREEN_WIDTH * 0.46; // this is equivalent to 180 from a 393 device width
const scanBarHeight = SCREEN_WIDTH * 0.0025; //this is equivalent to 1 from a 393 device width
const scanBarColor = "#22ff00";

const iconScanColor = "blue";
const calwidth = 200;

console.disableYellowBox = true;

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [qrcode, setQrcode] = useState('');
  const router = useRouter();
  const [maskRowHeight, setMaskRowHeight] = useState(null);
  const [maskColWidth, setMaskColWidth] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
      const { height, width } = await Dimensions.get('window');
      setMaskRowHeight(Math.round((height - calwidth) / 20));
      setMaskColWidth((width - calwidth) / 2)
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(false);
     router.replace(`./camera/${data}`);
   // setQrcode(data);
   // return <Text>Qrcode : ${data}</Text>;
   // return <Redirect href={`./camera/1234`}  />;
   // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  //return alert(`Bar code with and data has been scanned!`);
  
  const scanOverlay = {
    position:        'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
  };

  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: maskColWidth * 0.35
      },
      to: {
        [translationType]: fromValue
      }
    };
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <View style={styles.maskOutter}>
          <View style={[{ flex: maskRowHeight  }, styles.maskRow, styles.maskFrame]} />
          <View style={[{ flex: 30 }, styles.maskCenter]}>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
            <View style={styles.maskInner}>
              <Animatable.View 
                direction="alternate-reverse"
                iterationCount="infinite"
                duration={1700}
                easing="linear"
                style={styles.scanBar}
                animation={makeSlideOutTranslation("translateY", 1.25)}
              />
            </View>
            <View style={[{ width: maskColWidth }, styles.maskFrame]} />
          </View>
          <View style={[{ flex: maskRowHeight }, styles.maskRow, styles.maskFrame]}>
            <Text style={{ 
                backgroundColor: 'rgba(255,255,255,0.3)',
                marginTop: 8,
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',
                padding: 10,
                borderRadius: 10,
                width: '50%',
              }}>Scanning...</Text>
          </View>
        </View>
      </BarCodeScanner>
      {scanned && <Button title={`Tap to Scan Again ${qrcode}`} onPress={() => setScanned(false)} />}
    </View>
  );
}

const thickness = 6;
const borderRadius = 20;
const borderLength = '25%'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  maskOutter: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  maskInner: {
    width: calwidth,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
    width: '100%',
  },
  box1: {
    position: 'absolute', 
    height: borderLength, 
    width: borderLength, 
    top: 0, 
    left: '35%', 
    borderColor: 'white', 
    borderWidth: thickness,
    borderTopLeftRadius: borderRadius,
  },

  rectangleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  leftAndRightOverlay: {
    height: SCREEN_WIDTH * 0.65,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor
  },

  rectangle: {
    height: rectDimensions,
    width: rectDimensions,
    borderWidth: rectBorderWidth,
    borderColor: rectBorderColor,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  topOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    justifyContent: "center",
    alignItems: "center"
  },

  bottomOverlay: {
    flex: 1,
    height: SCREEN_WIDTH,
    width: SCREEN_WIDTH,
    backgroundColor: overlayColor,
    paddingBottom: SCREEN_WIDTH * 0.25
  },
  maskCenter: { flexDirection: 'row' },
  scanBar: {
    width: '90%',
    height: 5,
    backgroundColor: 'rgba(255,0,0,0.5)',
    alignSelf: 'center'
  }
});