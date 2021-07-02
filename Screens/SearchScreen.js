import React from 'react'
import { View, Text } from 'react-native'
import SearchInput from '../Components/SearchInput'
const SearchScreen = ({navigation}) => {
    return (
        <View>
            <Text>Welcome to the Search Screen</Text>
            <SearchInput navigation={navigation}/>
        </View>
    )
}

export default SearchScreen
