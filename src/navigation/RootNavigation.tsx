import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BarCode from '../screens/BarCode';
import Home from '../screens/Home';
import Contact from '../screens/Contact';

type IRoot = {
  Home: undefined;
  BarCode: undefined;
  Contact: undefined;
};

const RootStack = createStackNavigator<IRoot>();

const Root = () => (
  <RootStack.Navigator headerMode='none' initialRouteName='Home' >
    <RootStack.Screen name='Home' component={Home} />
    <RootStack.Screen name='BarCode' component={BarCode} />
    <RootStack.Screen name='Contact' component={Contact} />
  </RootStack.Navigator>
);

export default Root;
