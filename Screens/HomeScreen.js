import React, {useState,useEffect} from 'react'
import { View,StyleSheet} from 'react-native'
import {Button} from 'react-native-paper'
import CocktailCard from '../Components/CocktailCard'
import CocktailAPI from '../CocktailAPI'
import FilterButtonList from '../Components/FilterButtonList'
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
        
        <View
        style={styles.container}
        >
            <CocktailCard navigation={navigation} drinkData={randomDrink}/>
            <Button
            mode='outlined'
            onPress={() => setCount(count+1)}
            >Generate Random Drink</Button>
            {/* <FilterButtonList/> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    flex:2
  }
})
export default HomeScreen
