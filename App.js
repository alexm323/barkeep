import React,{useEffect,useState} from 'react';
import {Text,ImageBackground,View, StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import { NavigationContainer } from '@react-navigation/native';
import CocktailDetailsHeader from './Utilities/CocktailDetailsHeader';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './Screens/SearchScreen';
import HomeStackNavigatorScreen from './Screens/HomeStackNavigatorScreen';
import LoadingSpinner from './Utilities/LoadingSpinner';

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [randomDrink,setRandomDrink] = useState('')
  

  useEffect(() => {
    async function getInitialCocktail(){
      let randomDrinkData = await CocktailAPI.getRandomCocktail()
      setRandomDrink(randomDrinkData)
      setIsLoaded(true)
    }

    getInitialCocktail();
    setIsLoaded(false)
  }, [])

  return (
    
    <PaperProvider>
      {
      !isLoaded ? 
        <LoadingSpinner/>
        :
        <>
        <NavigationContainer>
          
          <Tab.Navigator 
          initialRouteName="Home"
          
          >
            
            <Tab.Screen name='HomeStack' component={HomeStackNavigatorScreen} options={{ headerTitle: 'HomeStackNavigator' }} initialParams={{drinkData:randomDrink}}/>
            
            <Tab.Screen name = 'SearchScreen' component={SearchScreen} options={{ headerTitle: 'Search' }}/>
            
          </Tab.Navigator>
        </NavigationContainer>
      </>
      }
      
    </PaperProvider>
    
  );
}


