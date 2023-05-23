import { SafeAreaView, View, Text, TextInput, Button } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import LoginSVG from '../assets/images/misc/login.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
    const [fontsLoaded] = useFonts({
        'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    
    if (!fontsLoaded) {
    return null;
    }
  return (
    <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
        <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems:'center'}}>
                <LoginSVG height={300} width={300} style={{transform: [{rotate: '-5deg'}]}}/>       
            </View>
            <Text 
                style={{
                    fontFamily: 'Roboto-Medium', 
                    fontSize:28, 
                    fontWeight: '500', 
                    color:'#333', 
                    marginBottom: 30
                }}>
                Login
            </Text>
            <View 
                style={{ 
                    flexDirection: 'row', 
                    borderBottomColor: '#ccc', 
                    borderBottomWidth: 1, 
                    paddingBottom: 8,
                    marginBottom: 25,
                }}
            >
                <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5}} />
                <TextInput 
                    placeholder='Email ID' 
                    style={{flex: 1, paddingVertical: 0}}
                    keyboardType='email-address' 
                />
            </View>
            <View 
                style={{ 
                    flexDirection: 'row', 
                    borderBottomColor: '#ccc', 
                    borderBottomWidth: 1, 
                    paddingBottom: 8,
                    marginBottom: 25,
                }}
            >
                <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5}} />
                <TextInput 
                    placeholder='Password' 
                    style={{flex: 1, paddingVertical: 0}}
                    inputType='password' 
                    fieldButtonLabel={"Forgot?"}
                    fieldButtonFunction={() => {}}
                />
            </View>
            <Button title="Login"/>
        </View>
    </SafeAreaView>
  )
}

SplashScreen.preventAutoHideAsync();

export default LoginScreen