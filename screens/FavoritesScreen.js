import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios'
import RecipeCard from '../components/RecipeCard'


function FavoritesScreen() {

    const [recipeResults, setRecipeResults] = useState([]);

    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5002/favorites')

        //work on backend route to fetch favorite recipes
            console.log(resp.data)
            setRecipeResults(resp.data)

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getAllRecipes();
    }, []);

    return (
        <ScrollView >
        <SafeAreaView >
            <View style = {{backgroundColor: '#496779'}}>
            
                <Text style = {{fontSize: 17, color: 'white', margin: 20}}>
                    Here are my favorites:
                </Text>
        {recipeResults.map(recipe => (
            <RecipeCard
                // id ={recipe.id}
                name={recipe.name}
                image_url = {recipe.image_url}
            />
        ))
        }
     
        </View>
        </SafeAreaView>
        </ScrollView>
    )
}


export default FavoritesScreen