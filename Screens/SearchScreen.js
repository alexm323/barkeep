import React from 'react'
import { View, Text } from 'react-native'
import SearchInput from '../Components/SearchInput'
import {createStackNavigator} from '@react-navigation/stack'
import SearchCocktailHeader from '../Utilities/SearchCocktailHeader'
import CocktailDetailsScreen from './CocktailDetailsScreen'
const Stack = createStackNavigator();
const SearchScreen = ({navigation}) => {
    return (
        
            
            <Stack.Navigator
                screenOptions={{
                    header: ({ scene, previous, navigation }) => (
                    <SearchCocktailHeader scene={scene} previous={previous} navigation={navigation} />
                    ),
                }}
                >
                            
                <Stack.Screen name='Search' component={SearchInput} options={{ headerTitle: 'Search' }}/>
                <Stack.Screen name='CocktailDetails' component={CocktailDetailsScreen} options={{ headerTitle: 'Drink Details' }}/>
                
            </Stack.Navigator>    
            
        
    )
}

export default SearchScreen
