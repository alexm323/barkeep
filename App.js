import React,{useEffect,useState} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import SearchScreen from './Screens/SearchScreen';
import HomeStackNavigatorScreen from './Screens/HomeStackNavigatorScreen';
import LoadingSpinner from './Utilities/LoadingSpinner';

const Tab = createMaterialBottomTabNavigator();

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
          tabBarOptions={{
            activeTintColor: '#6400ee',
          }}
          >
            
            <Tab.Screen 
            name='Home' 
            component={HomeStackNavigatorScreen} 
            options={{
               headerTitle: 'HomeStackNavigator',
               tabBarIcon:"home" 
            }} 
            initialParams={{drinkData:randomDrink}}
            />
            
            <Tab.Screen 
            name = 'Search' 
            component={SearchScreen} 
            options={{ 
              headerTitle: 'Search',
              tabBarIcon:"magnify" 
            
            }}
            />
            
          </Tab.Navigator>
        </NavigationContainer>
      </>
      }
      
    </PaperProvider>
    
  );
}


