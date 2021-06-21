import React from 'react'
import { absoluteCranberry,filterIngredients } from '../helpers'
import { View, Text } from 'react-native'
import CocktailDetails from './CocktailDetails'

const CocktailDetailsScreen = () => {
    return (
        <CocktailDetails drink={absoluteCranberry} ingredients={filterIngredients(absoluteCranberry)}/>
    )
}

export default CocktailDetailsScreen
