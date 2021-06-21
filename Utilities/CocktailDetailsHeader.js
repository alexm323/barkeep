import React from 'react'
import { Appbar } from 'react-native-paper'
import { View, Text } from 'react-native'

const CocktailDetailsHeader = ({scene,previous,navigation}) => {
    const _goBack = () => console.log('Went back');

    const handleFavorite = () => console.log('Searching');
  
    const _handleMore = () => console.log(scene);
    console.log(previous)
    return (
    
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title={scene.route.name}/>
        <Appbar.Action icon="star" onPress={_handleMore} />

      </Appbar.Header>
    
    
    )
}

export default CocktailDetailsHeader
