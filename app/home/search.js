import { StyleSheet, Text, View } from "react-native";
import { Link, Redirect, Stack } from 'expo-router'

const users = [
  {
    username: 'vadim',
    name: 'Vadim Savin'
  },
  {
    username: 'alex',
    name: 'Alexandra'
  }
]

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link href="/home" style={styles.link}>Home</Link>
        <Link href="/Rachet" style={styles.link}>Open Rachet's profile</Link>

        {users.map((user) => (
          <Link
            key={user.username} 
            href={`/${user.username}`} 
            style={styles.link}
          >
            Open {user.name}'s profile
          </Link>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  }
});