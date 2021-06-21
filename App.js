import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import CocktailDetails from './Screens/CocktailDetails';
import {absoluteCranberry, filterIngredients,brandyAlexander} from './helpers'
import {createStackNavigator} from '@react-navigation/stack'
import CocktailDetailsScreen from './Screens/CocktailDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import CocktailDetailsHeader from './Utilities/CocktailDetailsHeader';
const Stack = createStackNavigator();

export default function App() {
  
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        header: ({ scene, previous, navigation }) => (
          <CocktailDetailsHeader scene={scene} previous={previous} navigation={navigation} />
        ),
      }}
      >

        <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }}/>
        <Stack.Screen name='CocktailDetails' component={CocktailDetailsScreen} options={{ headerTitle: 'Drink Details' }}/>
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
