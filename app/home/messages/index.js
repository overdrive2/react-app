import { Link } from 'expo-router';
import { View, Text } from 'react-native'

const messages = () => {
  return (
    <View>
      <Link href="/home/messages/123" style={{margin: 10, fontSize: 24}}>Messages with Lukas</Link>
      <Link href="/home/messages/567" style={{margin: 10, fontSize: 24}}>Messages with Adus</Link>
      <Link href="/home/messages/890" style={{margin: 10, fontSize: 24}}>Messages with Accut</Link>
    </View>
  )
}

export default messages;