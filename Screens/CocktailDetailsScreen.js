import React from 'react'
import { filterIngredients } from '../helpers'
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
