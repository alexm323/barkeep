import React from 'react'
import { View } from 'react-native'
import {Card,Button} from 'react-native-paper'

const CocktailCard = ({navigation,drinkData}) => {
    return (
        <View >
        <Card>
            <Card.Title title={drinkData.strDrink} subtitle={drinkData.strCategory} />
            <Card.Cover source={{ uri: drinkData.strDrinkThumb }} />
            <Card.Actions>
                <Button
                mode='contained'
                onPress={() => navigation.push('CocktailDetails',{drinkData:drinkData})}
                >View {drinkData.strDrink} Details</Button>
            </Card.Actions>

        </Card>
        
    </View>
    
  );
}

export default CocktailCard
