import { Stack } from 'expo-router'

const layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='index' options={{ title:'Login' }} />
    </Stack>
  )
}

export default layout