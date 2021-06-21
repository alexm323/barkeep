import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import CocktailDetails from './Screens/CocktailDetails';
import {absoluteCranberry, filterIngredients} from './helpers'


export default function App() {
  
  return (
    <PaperProvider>
      <CocktailDetails drink={absoluteCranberry} ingredients={filterIngredients(absoluteCranberry)}/>
      <View style={styles.container}>
      <StatusBar style="auto" />
      
    </View>
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
