import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// ---- SCREENS ---- // 
import LoginPage from '../screens/LoginPage';
import OnbordingPage from '../screens/OnbordingPage';
import SignInPage from '../screens/SignInPage';
import NumberPage from '../screens/NumberPage';
import HomePage from '../screens/HomePage';
import SignUpPage from '../screens/SignUpPage';
import VerificationPage from '../screens/VerificationPage';
import SelectLocationPage from '../screens/SelectLocationPage';
import ProductDetailPage from '../screens/ProductDetailPage';
import ExplorePage from '../screens/ExplorePage';



const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName='OnbordingPage'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
            />
            <Stack.Screen
                name="OnbordingPage"
                component={OnbordingPage}
            />
               <Stack.Screen
                name="SignInPage"
                component={SignInPage}
            />
             <Stack.Screen
                name="NumberPage"
                component={NumberPage}
            />
             <Stack.Screen
                name="HomePage"
                component={HomePage}
            />
             <Stack.Screen
                name="SignUpPage"
                component={SignUpPage}
            />
             <Stack.Screen
                name="VerificationPage"
                component={VerificationPage}
            />
             <Stack.Screen
                name="SelectLocationPage"
                component={SelectLocationPage}
            />
             <Stack.Screen
                name="ProductDetailPage"
                component={ProductDetailPage}
            />
             <Stack.Screen
                name="ExplorePage"
                component={ExplorePage}
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