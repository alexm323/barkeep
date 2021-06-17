import axios from "axios";



class CocktailAPI {
    static async getCocktailByName(cocktailName){
        
            const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
            console.log(res.data.drinks[0].strDrink )
            return res.data.drinks[0].strDrink 
        
        
    }
}

export default CocktailAPI;