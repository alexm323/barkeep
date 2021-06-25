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