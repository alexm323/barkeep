import React,{useState,useEffect} from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './HomeScreen';
import CocktailDetailsScreen from './CocktailDetailsScreen';
import CocktailDetailsHeader from '../Utilities/CocktailDetailsHeader';
const Stack = createStackNavigator();
const HomeStackNavigatorScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [randomDrink,setRandomDrink] = useState('')
    
  
    useEffect(() => {
      async function getInitialCocktail(){
        try {
          let randomDrinkData = await CocktailAPI.getRandomCocktail()
          setRandomDrink(randomDrinkData)
          setIsLoaded(true)
        } catch (error) {
          console.log(error)
        }
        
      }
  
      getInitialCocktail();
    }, [])
    return (<>
        
        <Stack.Navigator
        screenOptions={{
            header: ({ scene, previous, navigation }) => (
              <CocktailDetailsHeader scene={scene} previous={previous} navigation={navigation} />
            ),
          }}
        >
            
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }} initialParams={{drinkData:randomDrink}}/>
            <Stack.Screen name='CocktailDetails' component={CocktailDetailsScreen} initialParams={{drinkData:randomDrink}} options={{ headerTitle: 'Drink Details' }} drinkDetails={randomDrink}/>
        </Stack.Navigator>
        </>
    )
}

export default HomeStackNavigatorScreen
