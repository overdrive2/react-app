import { View, Text, Button } from 'react-native'
import React from 'react'
import { useRouter, useSearchParams } from 'expo-router'

const scanedCode = () => {
  const { qrcode } = useSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style="{{ fontSize: 30 }}">Scanned with id: {qrcode}</Text>
      <Button onPress={() => router.replace('/home/camera')} title='Go back'></Button>
    </View>
  )
}

export default scanedCode