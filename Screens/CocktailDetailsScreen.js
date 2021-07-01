import React from 'react'
import { filterIngredients } from '../helpers'
import Instructions from '../Components/Instructions'

const CocktailDetailsScreen = ({route}) => {

    const drinks = route.params.drinkData;
    const ingredients = filterIngredients(route.params.drinkData)
    return (
        <Instructions drink={drinks} ingredients={ingredients}/>
    )
}

export default CocktailDetailsScreen
