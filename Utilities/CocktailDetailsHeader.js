import React from 'react'
import { Appbar } from 'react-native-paper'
import { View, Text } from 'react-native'

const CocktailDetailsHeader = () => {
    const _goBack = () => console.log('Went back');

    const handleFavorite = () => console.log('Searching');
  
    const _handleMore = () => console.log('Shown more');
    return (
    
        <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Title"/>
      <Appbar.Action icon="star" onPress={handleFavorite} />

    </Appbar.Header>
    
    
    )
}

export default CocktailDetailsHeader
