import React from 'react'
import { Appbar } from 'react-native-paper'
import { View, Text } from 'react-native'

const CocktailDetailsHeader = ({scene,previous,navigation}) => {
    const _goBack = () => console.log('Went back');

    const handleFavorite = () => console.log('Searching');
  
    const _handleMore = () => console.log(scene);
    // console.log(navigation.canGoBack())
    return (
    
      <Appbar.Header>
        {
          navigation.canGoBack() ? 
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          :
          console.log('nowhere to go back to ')
        }
        
        <Appbar.Content title={scene.route.name}/>
        <Appbar.Action icon="star" onPress={_handleMore} />

      </Appbar.Header>
    
    
    )
}

export default CocktailDetailsHeader
