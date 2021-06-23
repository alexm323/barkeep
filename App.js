import React,{useEffect,useState} from 'react';
import { StyleSheet,Text} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import {createStackNavigator} from '@react-navigation/stack'
import CocktailDetailsScreen from './Screens/CocktailDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import CocktailDetailsHeader from './Utilities/CocktailDetailsHeader';

const Stack = createStackNavigator();

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
  }, [])

  return (
    
    <PaperProvider>
      {
      !isLoaded ? 
        <Text>Loading</Text>
        :
        <>
        <NavigationContainer>
          <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={{
            header: ({ scene, previous, navigation }) => (
              <CocktailDetailsHeader scene={scene} previous={previous} navigation={navigation} />
            ),
          }}
          >

            <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Home' }} initialParams={{drinkData:randomDrink}}/>
            <Stack.Screen name='CocktailDetails' component={CocktailDetailsScreen} initialParams={{drinkData:randomDrink}} options={{ headerTitle: 'Drink Details' }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </>
      }
      
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
