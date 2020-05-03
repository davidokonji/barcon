import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {View} from 'react-native';
import RootNav from './src/navigation/RootNavigation';

console.disableYellowBox = true;

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
      }}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNav />
          </NavigationContainer>
        </SafeAreaProvider>
    </View>
  );
}