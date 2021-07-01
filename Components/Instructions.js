import React,{useState} from 'react'
import {Button, Card, Title, Paragraph,List } from 'react-native-paper'
import {ScrollView} from 'react-native'

import IngredientListItem from '../Utilities/IngredientListItem';

const Instructions = ({drink,ingredients}) => {

    
  return (
    <ScrollView >
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
            <List.Subheader>Ingredients List</List.Subheader>
        {ingredients[0].map((element,i) => {
            return <IngredientListItem ingredientName={element} ingredientAmount ={ingredients[1][i]} key={element}/>
        })}
        </List.Section>
        
    </ScrollView>
    
  );
}

export default Instructions
  