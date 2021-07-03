import React,{useState,useEffect} from 'react'
import { View} from 'react-native'
import { TextInput } from 'react-native-paper'
import CocktailAPI from '../CocktailAPI'
import CardList from './CardList'
import LoadingSpinner from '../Utilities/LoadingSpinner'
const SearchInput = ({navigation}) => {
  
  const [text,setText] = useState('')
  const [popularDrinks,setPopularDrinks] = useState('')
  const [searchData, setSearchData] = useState('')
  const [isLoaded,setIsLoaded] = useState(false)

    useEffect(() => {
        async function getPopDrinks(){
          try {
            let popDrinks = await CocktailAPI.getTenRandom();
            setPopularDrinks(popDrinks)
            setIsLoaded(true)
          } catch (error) {
            console.log(error)
          }    
        }
        async function searchDrink(name){
          try{
            
            
            let searchDrinks = await CocktailAPI.getCocktailByName(name)
            if(searchDrinks.drinks !== null){
              setPopularDrinks(searchDrinks)
              setIsLoaded(true)
            }else{
              alert(`${name} is an invalid search string`)
            }
            
            
          }catch(error){

            console.log(error)
          }
        }
        
        searchData ? searchDrink(text) : getPopDrinks();
      }, [searchData])
    

    const handleSubmit = () => {
        
        // console.log(text)
        setSearchData(text)
        console.log(text)
        
    }

    return (
        !isLoaded ?
        <LoadingSpinner />
        :
        <View>
            <TextInput
            style={{borderBottomColor:'#6200EE',borderBottomWidth:3}}
            mode='flat'
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSubmit}
            label="Search Drink"
            />

            
        <CardList navigation={navigation} drinks={popularDrinks} />
        </View>
    )
}

export default SearchInput

