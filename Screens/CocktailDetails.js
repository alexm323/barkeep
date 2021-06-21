import React,{useState} from 'react'
import {Button, Card, Title, Paragraph, Avatar,List } from 'react-native-paper'
import { View, Text } from 'react-native'
import CocktailDetailsHeader from '../Utilities/CocktailDetailsHeader';
import {filterIngredients} from '../helpers'
import IngredientListItem from '../Utilities/IngredientListItem';

const CocktailDetails = ({drink,ingredients}) => {

    
  return (
        <View>
        <CocktailDetailsHeader title="Drink Details" />
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
        <List.Section>
        {ingredients[0].map((element) => {
            return <IngredientListItem ingredientName={element}/>
        })}
        </List.Section>
        
    </View>
    
  );
}

export default CocktailDetails
