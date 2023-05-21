import { Tabs } from "expo-router";
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs
            screenOptions={{ tabBarShowLabel: true, tabBarActiveTintColor: 'blue' }}
        >
            <Tabs.Screen
                name='feed' 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="home" size={24} color={color} />
                    ),
                    title: 'Home',
                }}
            />

            <Tabs.Screen
                name='camera' 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="camera" size={24} color={color} />
                    ),
                    title: 'Camera',
                }}
            />

            <Tabs.Screen
                name='search' 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="th-list" size={24} color={color} />
                    ),
                    title: 'List',
                }}
            />       

            <Tabs.Screen
                name='messages' 
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="envelope" size={24} color={color} />
                    ),
                    headerShown: false,
                    title: 'Message',
                }}
            />            
        </Tabs>
    );   
};