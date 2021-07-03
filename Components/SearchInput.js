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
        async function getSearchedDrink(){
          try {
            let popDrinks = await CocktailAPI.getTenRandom();
            setPopularDrinks(popDrinks)
            setIsLoaded(true)
          } catch (error) {
            console.log(error)
          }    
        }
        getSearchedDrink();
      }, [])
    
    const handleSubmit = () => {
        
        // console.log(text)
        setSearchData(text)
        setText('')
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

