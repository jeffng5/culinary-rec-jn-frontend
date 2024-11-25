import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios'

const RecipeFull = () => {
    const [recipeResults, setRecipeResults] = useState([]);

    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5431')
            console.log(resp.data)
            setRecipeResults(resp.data)
            req.end()
        } catch (error) {
            console.log(error)

        }
    };


    useEffect(() => {
       async function getRecipes() { 
        const recipes = await getAllRecipes()
    }
     getRecipes()}, []);

    console.log('test')
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