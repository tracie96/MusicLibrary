// navigation/index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import SignupTalentScreen from '../screens/SignupTalentScreen';
import SignupBusinessScreen from '../screens/SignupBusinessScreen';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import SelectAccountType from '../screens/NextOnboardingscreen';
import Login from '../screens/LoginScreen';
import SignUpListener from '../screens/SignupListener';
import SignupBusinessCheck from '../screens/SignupBusinessCheck';
import VerifyEmail from '../screens/VerifyEmail';
import FavoriteArtistSelection from '../screens/SelectArtistOnboarding';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerShown:false
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Tab.Screen name="AccountType" component={SelectAccountType} options={{ headerShown: false }}/>
      <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupTalent" component={SignupTalentScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignupBusiness" component={SignupBusinessScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignupBusinessCheck" component={SignupBusinessCheck} options={{ headerShown: false }} />
      <Stack.Screen name="SignupListener" component={SignUpListener} options={{ headerShown: false }} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmail} options={{ headerShown: false }} />
      <Stack.Screen name="FavoriteArtistSelection" component={FavoriteArtistSelection} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
