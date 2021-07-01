import React,{useState,useEffect} from 'react'
import { View} from 'react-native'
import { TextInput } from 'react-native-paper'
import CocktailAPI from '../CocktailAPI'
const SearchInput = ({randomDrink}) => {
  const [text,setText] = useState('')
  const [searchData, setSearchData] = useState('')
  const [searchedDrink,setSearchedDrink] = useState('')

    useEffect(() => {
        async function getSearchedDrink(){
          let searchedDrinkData = await CocktailAPI.getCocktailByName(text)
          setSearchedDrink(searchedDrinkData)
          
        }
        
    
        getSearchedDrink();
        console.log(searchedDrink)
      }, [searchData])
    
    const handleSubmit = () => {
        
        // console.log(text)
        setSearchData(text)
        setText('')
    }

    return (
        <View>
            <TextInput
            mode='outlined'
            value={text}
            onChangeText={setText}
            onSubmitEditing={handleSubmit}
            label="Search Drink"
            />

            

        </View>
    )
}

export default SearchInput

