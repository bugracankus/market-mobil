import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ---- SCREENS ---- // 
import LoginPage from '../screens/LoginPage';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='LoginPage'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}