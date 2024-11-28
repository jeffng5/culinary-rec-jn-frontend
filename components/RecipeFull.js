import React, { useState, useEffect, useContext } from 'react'
import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import axios from 'axios'
import RecipeCard from './RecipeCard'
import TagButtons from './TagButtons'
import TagContext from '../hooks/TagContext';

const American = 'American'
const Chinese = 'Chinese'
const Asian = 'Asian'
const Japanese = 'Japanese'
const fusion = 'fusion'
const family_style = 'family-style'
const veggie = 'veggie'
const low_carb = 'low-carb'
const seafood = 'seafood'
const Mexican = 'Mexican'
const beef = 'beef'
const fish = 'fish'
const dim_sum = 'dim-sum'
const pork = 'pork'
const Italian = 'Italian'



const RecipeFull = () => {

    const [recipeResults, setRecipeResults] = useState([]);
    const [tags, setTags] = useState([])


    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5002')
            console.log(resp.data)
            setRecipeResults(resp.data)
            console.log(recipeResults)

        } catch (error) {
            console.log(error)
        }
    };

    
    async function getRecipesByTag() {
       
        let tags = ''

        let URL = {
            method :'GET',
            url : `http://localhost:5002/tags`,
            params : { id : tags },
            headers : { 'content-type' : "application/json" }
        }

        if (tags) {
        try {
            await axios.request(URL).then((response)=> {
                const r = response.data;
                setRecipeResults(r)
                console.log('HERE is the response object:', r)
                console.log('testing state', recipeResults) 
            })       
        } catch(err){
            console.log(err)
        }

    }
    }

    useEffect(() => {
        getAllRecipes();
        getRecipesByTag();
    }, []);

    console.log(tags)
    return (
        <>
  
        <View style = {{flexDirection:'row', flexWrap:'wrap', marginLeft: 30, gap: 20, paddingTop: 0, marginTop: 10, marginBottom: 20 }}>
   
        <TagButtons {...1-2}>1-2</TagButtons>       
        <TagButtons {...Italian}>Italian</TagButtons> 
        <TagButtons {...American} >American</TagButtons> 
        <TagButtons {...Chinese} >Chinese</TagButtons> 
        <TagButtons {...Asian} >Asian</TagButtons> 
        <TagButtons {...Japanese} >Japanese</TagButtons>
        <TagButtons {...fusion}>fusion</TagButtons> 
        <TagButtons {...family_style}>family-style</TagButtons> 
        <TagButtons {...veggie} >veggie</TagButtons> 
        <TagButtons {...low_carb}>low-carb</TagButtons> 
        <TagButtons {...seafood}>seafood</TagButtons> 
        <TagButtons {...Mexican}>Mexican</TagButtons> 
        <TagButtons {...beef}>beef</TagButtons> 
        <TagButtons {...fish}>fish</TagButtons> 
        <TagButtons {...dim_sum} >dim sum</TagButtons> 
        <TagButtons {...pork}>pork</TagButtons>
      
        </View>
    
                {recipeResults.map(recipe => (
                        
                    <RecipeCard
                        key = {recipe.id}    
                        name = {recipe.name}
             />       
          
                ))}
    
          
        </>
    )


}


export default RecipeFull;