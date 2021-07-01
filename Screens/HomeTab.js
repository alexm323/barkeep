import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HOMES() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
  
const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HOMES} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        
      );
}

export default HomeTab
