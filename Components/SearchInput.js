import React,{useState} from 'react'
import { View} from 'react-native'
import { TextInput } from 'react-native-paper'
const SearchInput = ({setSearch}) => {
    const [text,setText] = useState('')
    const handleSubmit = () => {
        setSearch(text)
        setText('')
    }
    return (
        <View>
            <TextInput
            mode='outlined'
            onChange={handleSubmit}
            label="Search Drink"
            />

            

        </View>
    )
}

export default SearchInput
