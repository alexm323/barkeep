import React from 'react'
import { ScrollView,View, Text } from 'react-native'
import CocktailCard from './CocktailCard'

const CardList = ({drinks,navigation}) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log(navigation)
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    return (
        <ScrollView>
            <View 
            style={{paddingBottom:165}}>
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
