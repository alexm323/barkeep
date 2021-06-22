import React from 'react'
import { View, Text} from 'react-native'
import {Button} from 'react-native-paper'
import CocktailCard from '../Components/CocktailCard'
import { brandyAlexander } from '../helpers'
const HomeScreen = ({navigation}) => {
    return (
        <View>
            <CocktailCard navigation={navigation} drinkData={brandyAlexander}/>
            <Button
            mode='outlined'
            onPress={() => navigation.navigate('CocktailDetails', {
                drinkData: brandyAlexander
            })}
            >"Cocktail Details"</Button>
        </View>
    )
}

export default HomeScreen
