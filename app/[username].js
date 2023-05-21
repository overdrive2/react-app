import { View, Text, Button, TextInput } from 'react-native'
import React from 'react'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { useSelector } from 'react-redux'

const profile = () => {
  const router = useRouter();
  const count = useSelector((state) => state.counter.value)
  const {name, username} = useSearchParams()  

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Stack.Screen 
          options={{
            title: username,
            headerStyle: { backgroundColor: '#1E2632' },
            headerTintColor: '#FFE030',
          }}
        />

        <Text style={{ fontSize:20 }}>Hello {name} (@{username})</Text>
        <Text>Count : {count}</Text>
        <Button onPress={() => router.back()} title='Go back'></Button>
      </View>
  )
}

export default profile