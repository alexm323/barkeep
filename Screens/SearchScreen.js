import React from 'react'
import { View, Text } from 'react-native'
import SearchInput from '../Components/SearchInput'
import {createStackNavigator} from '@react-navigation/stack'
import SearchCocktailHeader from '../Utilities/SearchCocktailHeader'
const Stack = createStackNavigator();
const SearchScreen = ({navigation}) => {
    return (
        <View>
            <Stack.Navigator
                screenOptions={{
                    header: ({ scene, previous, navigation }) => (
                    <SearchCocktailHeader scene={scene} previous={previous} navigation={navigation} />
                    ),
                }}
                >
                            
                <Stack.Screen name='Search' component={SearchInput} options={{ headerTitle: 'Search' }}/>
                
            </Stack.Navigator>
            <Text>Welcome to the Search Screen</Text>
            <SearchInput navigation={navigation}/>
        </View>
    )
}

export default SearchScreen
