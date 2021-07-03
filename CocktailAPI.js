import axios from "axios";



class CocktailAPI {
    static async getCocktailByName(cocktailName){
            
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${cocktailName}`)
            
            return res.data
        
            
    }
    static async getRandomCocktail(){
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/random.php")
        // console.log(res.data.drinks[0])
        return res.data.drinks[0]
    }
    static async getPopularCocktails(){
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/popular.php")
        // console.log(res.data.drinks)
        return res.data
    }
    static async getTenRandom(){
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php")
        // console.log(res.data.drinks)
        return res.data
    }
    static async filterByIngredient(ingredient){
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${ingredient}`)
        // console.log(res.data.drinks)
        return res.data
    }
    
}

export default CocktailAPI;