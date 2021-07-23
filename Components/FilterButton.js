import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'

const FilterButton = ({queryName}) => {
    return (
        <TouchableOpacity
        mode='outlined'
        ><Button>{queryName}</Button></TouchableOpacity>
    )
}

export default FilterButton
