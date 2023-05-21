import { Stack, useRouter } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { useState } from "react";
import store from '../reducers/store'
import { Provider } from 'react-redux'

export default layout = () => {
    const router = useRouter();

    return (
        <Provider store={store}>
            <Stack 
                screenOptions={{ 
                    headerStyle: { 
                        backgroundColor: '#FFE030' 
                    }, 
                    headerTintColor: '#1E2632',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerRight: () => (
                        <AntDesign 
                            onPress={() => router.push('/modal')}
                            name="infocirlceo" 
                            size={24} 
                            color="black" 
                        />
                    ),
                }} 
            >
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen 
                    name="modal" 
                    options={{ 
                        presentation: 'modal',
                        headerStyle: {
                            backgroundColor: 'white',
                        },
                        headerTintColor: '#1E2632',
                    }} 
                />
                <Stack.Screen
                    name="home" 
                    options={{headerShown: false}} 
                />
            </Stack>
        </Provider>
    );         
};