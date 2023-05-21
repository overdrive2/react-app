import { Stack } from "expo-router";

export default () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}} />
            <Stack.Screen name='[qrcode]' options={{ title:'QRCode' }} />
        </Stack>
    );
};