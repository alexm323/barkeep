export const filterIngredients = (drinkData) => {
    let ingredients = []
    let amounts = []
    let count = 1;
    for (const [key,value] of Object.entries(drinkData)){
        
        
        if(key.includes("Ingredient") && value !== null){
            ingredients.push(value)

            drinkData[`strMeasure${count}`] ? amounts.push(drinkData[`strMeasure${count}`]) : amounts.push('preference')
            count +=1;
        }

    }
    return [ingredients,amounts]
    
}

export const absoluteCranberry= {
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

  export const brandyAlexander = {
    "idDrink": "11016",
    "strDrink": "Brandy Alexander",
    "strDrinkAlternate": null,
    "strTags": "Nutty,Dairy",
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": null,
    "strAlcoholic": "Alcoholic",
    "strGlass": "Whiskey Glass",
    "strInstructions": "Shake all ingredients (except nutmeg) with ice and strain contents into a cocktail glass. Sprinkle nutmeg on top and serve.",
    "strInstructionsES": null,
    "strInstructionsDE": "Alle Zutaten (außer Muskatnuss) mit Eis schütteln und in ein Cocktailglas abseihen. Muskatnuss darüber streuen und servieren.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Shakerare tutti gli ingredienti (tranne la noce moscata) con ghiaccio e filtrare il contenuto in una coppetta da cocktail. Cospargere di noce moscata e servire.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/mlyk1i1606772340.jpg",
    "strIngredient1": "Brandy",
    "strIngredient2": "Creme de Cacao",
    "strIngredient3": "Light cream",
    "strIngredient4": "Nutmeg",
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
    "strMeasure1": "1 oz ",
    "strMeasure2": "1 oz white ",
    "strMeasure3": "1 oz ",
    "strMeasure4": null,
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
    "strImageSource": "https://commons.wikimedia.org/wiki/File:Brandy_Alexander_on_the_Rocks.jpg",
    "strImageAttribution": "Will Shenton",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2017-01-02 20:09:06"
  }