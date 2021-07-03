import React from 'react'
import { ScrollView,View } from 'react-native'
import CocktailCard from './CocktailCard'

const CardList = ({drinks,navigation}) => {

    return (
        <ScrollView>
            <View 
            style={{paddingBottom:60}}>
            {
                drinks.drinks.map(drink => {
                    return <CocktailCard navigation={navigation} key={drink.idDrink} drinkData={drink}/>
                })
            }
            </View>
            
        </ScrollView>
    )
}

export default CardList
