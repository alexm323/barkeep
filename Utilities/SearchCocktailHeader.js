import React from 'react'
import { Appbar } from 'react-native-paper'

const SearchCocktailHeader = ({scene,previous,navigation}) => {

    return (
    
      <Appbar.Header>
        {
          navigation.canGoBack() ? 
          <Appbar.BackAction onPress={() => navigation.pop()} />
          :
          console.log('nowhere to go back to ')
        }
        
        <Appbar.Content title={scene.route.name}/>
        <Appbar.Action icon="star" onPress={() => console.log("Favorite")} />

      </Appbar.Header>
    
    
    )
}

export default SearchCocktailHeader