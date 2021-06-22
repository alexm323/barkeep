import React from 'react'
import { absoluteCranberry,filterIngredients } from '../helpers'
import { View, Text } from 'react-native'
import CocktailDetails from './CocktailDetails'

const CocktailDetailsScreen = ({route}) => {

    console.log(route.params)
    const drinks = route.params.drinkData;
    const ingredients = filterIngredients(route.params.drinkData)
    return (
        <CocktailDetails drink={drinks} ingredients={ingredients}/>
    )
}

export default CocktailDetailsScreen
