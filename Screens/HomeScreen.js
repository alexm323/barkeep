import React, {useState,useEffect} from 'react'
import { View} from 'react-native'
import {Button} from 'react-native-paper'
import CocktailCard from '../Components/CocktailCard'
import CocktailAPI from '../CocktailAPI'
import FilterButtonList from '../Components/FilterButtonList'
import FilterButton from '../Components/FilterButton'

const HomeScreen = ({navigation}) => {
    const [randomDrink,setRandomDrink] = useState('')
    const [count,setCount] = useState(0)

    useEffect(() => {
        async function getRandom(){
          let popDrinks = await CocktailAPI.getPopularCocktails()
          let randomDrinkData = await CocktailAPI.getRandomCocktail()
          setRandomDrink(randomDrinkData)
        }
    
        getRandom();
      }, [count])


    return (
        
        <View>
            <CocktailCard navigation={navigation} drinkData={randomDrink}/>
            <Button
            mode='outlined'
            onPress={() => setCount(count+1)}
            >Generate Random23</Button>
            <FilterButtonList/>
            
        </View>
    )
}

export default HomeScreen
