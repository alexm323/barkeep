const filterIngredients = (drinkData) => {
    for (const [key,value] of Object.entries(drinkData)){
        if(key.includes("Ingredient") && value !== null){
            console.log(`${key}:${value}`);
        }
    }
}