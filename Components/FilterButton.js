import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'

const FilterButton = ({queryName}) => {
    return (
        <Button
        mode='outlined'
        >{queryName}</Button>
    )
}

export default FilterButton
