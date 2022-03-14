import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import Category from '../screens/Category';
import Home from '../screens/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetails from '../screens/CategoryDetails';

const Stack = createNativeStackNavigator();


const UserStack = () => (
    <Stack.Navigator  screenOptions={{headerShown: false}} >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='RecipeDetailScreen' component={RecipeDetailScreen} />
        <Stack.Screen name='Category' component={Category} />
        <Stack.Screen name='CategoryDetails' component={CategoryDetails} />
    </Stack.Navigator>
)

export default UserStack;

const styles = StyleSheet.create({});
