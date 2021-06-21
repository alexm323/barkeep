import React from 'react'
import { View, Text } from 'react-native'
import {List} from 'react-native-paper'

const IngredientListItem = ({ingredientName, ingredientAmount}) => {
    return (
        
          <List.Item
            title={ingredientName}
            key={ingredientName}
          />
    )
      
}

export default IngredientListItem
