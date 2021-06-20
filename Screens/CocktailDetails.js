import React from 'react'
import {Button, Card, Title, Paragraph, Avatar } from 'react-native-paper'
import { View, Text } from 'react-native'
import CocktailDetailsHeader from '../Utilities/CocktailDetailsHeader';

const CocktailDetails = ({drink}) => {
    console.log(drink)


  return (
    <View>
        <CocktailDetailsHeader/>
        <Card>
            <Card.Title title={drink.strDrink} subtitle={drink.strCategory} />
            <Card.Cover source={{ uri: drink.strDrinkThumb }} />
            <Card.Content>
            <Title>Instructions</Title>
            <Paragraph>{drink.strInstructions}</Paragraph>
            </Card.Content>
            
            <Card.Actions>
                <Button>Add Missing Ingredients to shopping List</Button>
            </Card.Actions>
            
        </Card>
    </View>
    
  );
}

export default CocktailDetails
