import React from 'react'
import {List} from 'react-native-paper'

const IngredientListItem = ({ingredientName, ingredientAmount}) => {
    return (
        
          <List.Item
            title={ingredientName}
            description={ingredientAmount}
            descriptionNumberOfLines={1}
          />
    )
      
}

export default IngredientListItem
