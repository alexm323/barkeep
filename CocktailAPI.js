import axios from "axios";



class CocktailAPI {
    static async getCocktailByName(cocktailName){
        
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=${cocktailName}`)
            // console.log(res.data.drinks[0].strDrink )
            return res.data.drinks[0]
        
        
    }
    static async getRandomCocktail(){
        const res = await axios.get("https://www.thecocktaildb.com/api/json/v2/9973533/random.php")
        // console.log(res.data.drinks[0])
        return res.data.drinks[0]
    }
}

export default CocktailAPI;