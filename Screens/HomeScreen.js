import React from 'react'
import { View, Text,Button} from 'react-native'
const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Welcome Home</Text>
            <Button
            title="Cocktail Details"
            onPress={() => navigation.navigate('CocktailDetails')}
            />
        </View>
    )
}

export default HomeScreen
