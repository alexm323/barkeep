import React from 'react'
import { View, Text } from 'react-native'
import FilterButton from './FilterButton'
const FilterButtonList = () => {
    return (
        <View
        
        >
            <FilterButton style={{flex:6}} queryName='tequila'/>
            <FilterButton style={{flex:6}} queryName='whiskey'/>
            <FilterButton style={{flex:6}} queryName='bourbon'/>
            <FilterButton style={{flex:6}} queryName='gin'/>
            <FilterButton style={{flex:6}} queryName='vodka'/>
            <FilterButton style={{flex:6}} queryName='rum'/>
        </View> 
    )
}

export default FilterButtonList
