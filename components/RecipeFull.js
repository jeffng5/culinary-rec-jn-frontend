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
const dim_sum = 'dim sum'
const pork = 'pork'
const Italian = 'Italian'



const RecipeFull = () => {

    const [recipeResults, setRecipeResults] = useState([]);
    const [secondaryRecipeResults, setSecondaryRecipeResults] = useState([])
    const { tags, setTags } = useContext(TagContext)
    const tagCtx = useContext(TagContext)
    console.log('tagCtx: ', tagCtx.tags)
    // const call = tagCtx.tags 
    // let text = call.toString()
    // console.log('moment of truth: ', text)
    
    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5002')
            console.log(resp.data)
            setRecipeResults(resp.data)
            
        } catch (error) {
            console.log(error)
        }
    };

 
    

    async function getRecipesByTag(tag) { 

        
        let URL = {
            method: 'GET',
            url: `http://localhost:5002/tags`,
            params: { ids: tag },
            headers: { 'content-type': "application/json" }
        }
   
    try{
        await axios.request(URL).then((response) => {
            const r = response.data;
            setRecipeResults(r)
            console.log('HERE is the response object:', r)
        })
    } catch (err) {
        console.log(err)
    }
            
      
  
    };

    console.log('Whoops: ',{tags})

    async function getExtraTags() {
    let URL2 = {
        method: 'GET',
        url: `http://localhost/5002/secondary`,
        params : {ids : {tags}},
        headers : { 'content-type': "application/json" }
    } 
    
    try{
        await axios.request(URL2).then((response) => {
            const r = response.data;
            setSecondaryRecipeResults(r)
            console.log('HERE is the response object:', r)
            
        })
    } catch (err) {
        console.log(err)
    }};


    useEffect(() => {
        getAllRecipes();

    }, []);

        return (
            <>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 30, gap: 20, paddingTop: 0, marginTop: 10, marginBottom: 20 }}>
            
                <TagButtons onPress={() => {getRecipesByTag('1-2')}}>1-2</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(Italian)}}>Italian</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(American); getExtraTags()}}>American</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(Chinese); getExtraTags()}}  >Chinese</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(Asian); getExtraTags()}}>Asian</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(Japanese); getExtraTags()}} >Japanese</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(fusion); getExtraTags()}} >fusion</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(family_style); getExtraTags()}} >family-style</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(veggie); getExtraTags()}}>veggie</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(low_carb); getExtraTags()}} >low-carb</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(seafood); getExtraTags()}} >seafood</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(Mexican); getExtraTags()}}>Mexican</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(beef); getExtraTags()}} >beef</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(fish); getExtraTags()}}>fish</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(pork); getExtraTags()}} >pork</TagButtons>
                <TagButtons onPress={() => {getRecipesByTag(dim_sum); getExtraTags()}} >dim sum</TagButtons>
            </View>


             {recipeResults.map(recipe => (

                <RecipeCard
                    // id ={recipe.id}
                    name={recipe.name}
                />

            ))
             }
            {secondaryRecipeResults.map(r => (
                <RecipeCard name = {r.name}
                />
            ))}
        
            
   
   </>)


    

 
    }


    ;



export default RecipeFull;