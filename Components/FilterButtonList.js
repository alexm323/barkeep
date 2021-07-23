import React from 'react'
import { View,StyleSheet,FlatList } from 'react-native'
import FilterButton from './FilterButton'

const spiritQueries = [
  {spirit:'tequila'},{spirit:'whiskey'},{spirit:'bourbon'},{spirit:'gin'},{spirit:'vodka'},{spirit:'rum'}
]
const FilterButtonList = () => {
    return (
        <FlatList
        data={spiritQueries}
        keyExtractor = {item => item.spirit}
        renderItem={({item}) => (
          <FilterButton style={styles.button} queryName={item.spirit}/>
        )}
        >
            
        </FlatList> 
    )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"pink",
    
  }
})
export default FilterButtonList
