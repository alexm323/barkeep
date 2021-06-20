import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import CocktailAPI from './CocktailAPI'
import CocktailDetails from './Screens/CocktailDetails';

const absoluteCranberry= {
  "idDrink": "15024",
  "strDrink": "Absolutely Cranberry Smash",
  "strDrinkAlternate": null,
  "strTags": null,
  "strVideo": null,
  "strCategory": "Ordinary Drink",
  "strIBA": null,
  "strAlcoholic": "Alcoholic",
  "strGlass": "Cocktail glass",
  "strInstructions": "Stir ingredients together. Serve over ice.",
  "strInstructionsES": null,
  "strInstructionsDE": "Zutaten verrühren. Auf Eis servieren.",
  "strInstructionsFR": null,
  "strInstructionsIT": "Mescola gli ingredienti insieme.\r\nServire con ghiaccio.",
  "strInstructionsZH-HANS": null,
  "strInstructionsZH-HANT": null,
  "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vqwstv1472811884.jpg",
  "strIngredient1": "Absolut Vodka",
  "strIngredient2": "Cranberry juice",
  "strIngredient3": "Ginger ale",
  "strIngredient4": "Ice",
  "strIngredient5": null,
  "strIngredient6": null,
  "strIngredient7": null,
  "strIngredient8": null,
  "strIngredient9": null,
  "strIngredient10": null,
  "strIngredient11": null,
  "strIngredient12": null,
  "strIngredient13": null,
  "strIngredient14": null,
  "strIngredient15": null,
  "strMeasure1": "2 oz ",
  "strMeasure2": "4 oz ",
  "strMeasure3": "2 oz ",
  "strMeasure4": "Add ",
  "strMeasure5": null,
  "strMeasure6": null,
  "strMeasure7": null,
  "strMeasure8": null,
  "strMeasure9": null,
  "strMeasure10": null,
  "strMeasure11": null,
  "strMeasure12": null,
  "strMeasure13": null,
  "strMeasure14": null,
  "strMeasure15": null,
  "strImageSource": null,
  "strImageAttribution": null,
  "strCreativeCommonsConfirmed": "No",
  "dateModified": "2016-09-02 11:24:44"
}
export default function App() {
  return (
    <PaperProvider>
      <CocktailDetails drink={absoluteCranberry} />
      <View style={styles.container}>
      <StatusBar style="auto" />
      
    </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
