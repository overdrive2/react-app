import React from 'react';
import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from 'expo-router'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { selectCount, increment } from '../reducers/actions/counterSlice';


export default function Page() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Text style={styles.subtitle}>Count : {count}</Text>
        <Button
          title="Increment value"
          onPress={() => dispatch(increment())}
        >
          Increment
        </Button>
        <Link href="/home" style={styles.link}>Home</Link>
        <Link href="/Rachet" style={styles.link}>Open Rachet's profile</Link>
        <Link href="/auth" style={styles.link} options={{ headerShown: false }}>auth</Link>
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