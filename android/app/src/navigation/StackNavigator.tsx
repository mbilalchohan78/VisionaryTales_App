import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';
import ARVRScreen from '../screens/ARVRScreen';
import TeacherLibraryScreen from '../screens/TeacherLibraryScreen';
import ClassScreen from '../screens/ClassScreen';
import VisionaryTalesScreen from '../screens/VisionaryTalesScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Books" component={BookScreen} />
      <Stack.Screen name="ARVR" component={ARVRScreen} />
      <Stack.Screen name="TeacherLibrary" component={TeacherLibraryScreen} />
      <Stack.Screen name="Class" component={ClassScreen} />
      <Stack.Screen name="VisionaryTales" component={VisionaryTalesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
