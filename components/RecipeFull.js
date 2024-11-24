import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios'

const RecipeFull = () => {
    const [recipeResults, setRecipeResults] = useState([]);

    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('https://localhost:80')
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
     getRecipes()}, []);

    console.log(recipeResults)
    console.log('HERE')
    return (
        <>
            <View>

                <Text>
                    {recipeResults}
                </Text>

            </View>

        </>
    )


}


export default RecipeFull;