import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Importação das Screens */
import Home from '../screens/Home';
import Details from '../screens/Details';
import Add from '../screens/Add';

const Stack = createNativeStackNavigator();

export default function () {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            <Stack.Screen component={Home} name='Home' />
            <Stack.Screen component={Details} name='Details' />
            <Stack.Screen component={Add} name='Add' />
        </Stack.Navigator>
    );
}