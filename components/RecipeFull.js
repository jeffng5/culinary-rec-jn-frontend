import React, { useState, useEffect } from 'react'
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios'
import RecipeCard from './RecipeCard'

const RecipeFull = () => {
    const [recipeResults, setRecipeResults] = useState([]);

    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5001')
            console.log(resp.data)
            setRecipeResults(resp.data)

        } catch (error) {
            console.log(error)

        }
    };


    useEffect(() => {
        async function getRecipes() {
            const recipes = await getAllRecipes()
        }
        getRecipes()
    }, []);


    return (
        <View>
            
                {recipeResults.map(recipe => (
                    <RecipeCard
                        {...recipe}
                    />
                ))}
           
        </View>
    )


}


export default RecipeFull;