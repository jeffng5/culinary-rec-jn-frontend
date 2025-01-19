import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import axios from 'axios'
import RecipeCard from './RecipeCard'
import TagButtons from './TagButtons'
import TagContext from '../hooks/TagContext';
import RatingComponentReadOnly from './RatingComponent-readOnly';


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

////// In Home Screen component and also where App starts /////

const RecipeFull = () => {

    const [recipeResults, setRecipeResults] = useState([]);
    const { tags, setTags } = useContext(TagContext)
    const [buttonPressed, setButtonPressed] = useState(false)
    // const [emptyMessage, setEmptyMessage] = useState(false);
    // const [recipeResultsByTag, setRecipeResultsByTag] = useState([]);

    const tagCtx = useContext(TagContext)
    console.log('tagCtx: ', tagCtx.tags)
    console.log('tags: ', { tags })

/// fetch all recipes
    const getAllRecipes = async function () {
        try {
            const resp = await axios.get('http://localhost:5002')
            console.log(resp.data)
            setRecipeResults(resp.data)

        } catch (error) {
            console.log(error)
        }
    };

    // fetch recipes by tag selected

    async function getRecipesByTag(tag) {
    
        const tagz = tagCtx.tags

        let URL = {
            method: 'GET',
            url: `http://localhost:5002/tags`,
            params: { ids: [tag, tagz] },
            headers: { 'content-type': "application/json" }
        }
        try {
            await axios.request(URL).then((response) => {
                const r = response.data;
                setRecipeResults(r)
                console.log('HERE is the response object:', r)
                setButtonPressed(true)
            })
        } catch (err) {
            console.log(err)
        }
    }

    console.log('CHECK IT OUT', tags)


    // unselects a tag and fetches accordingly
    async function deleteTagQuery() {

        let URL = {
            method: 'GET',
            url: `http://localhost:5002/tags`,
            params: { ids: tags },
            headers: { 'content-type': "application/json" }
        }
        try {
            await axios.request(URL).then((response) => {
                const r = response.data;
                setRecipeResults(r)
                console.log('HERE is the response object:', r)
                setButtonPressed(false)
            })
        } catch (err) {
            console.log(err)
        }

    }

    
    if (buttonPressed == true) {
        deleteTagQuery();
    }


    useEffect(() => {
        getAllRecipes();
       
    }, []);

    
    return (
        <>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 30, gap: 20, paddingTop: 0, marginTop: 10, marginBottom: 20 }}>

                <TagButtons onPress={() => getRecipesByTag('1-2') }>1-2</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(Italian) }>Italian</TagButtons>
                <TagButtons onPress={() =>  getRecipesByTag(American) }>American</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(Chinese) }  >Chinese</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(Asian) }>Asian</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(Japanese) } >Japanese</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(fusion) } >fusion</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(family_style) } >family-style</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(veggie) }>veggie</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(low_carb) } >low-carb</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(seafood) } >seafood</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(Mexican) }>Mexican</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(beef) } >beef</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(fish) }>fish</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(pork) } >pork</TagButtons>
                <TagButtons onPress={() => getRecipesByTag(dim_sum) } >dim sum</TagButtons>
            </View>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {recipeResults.map(recipe => (
                    <View style={{ width: '50%' }}>
                        <RatingComponentReadOnly 
                            id={recipe.id}
                            name={recipe.name}
                            image_url={recipe.image_url}
                            sumrating = {recipe.sumrating}  
                            divisor = {recipe.divisor} 
                            /> 
                    </View>
                ))
                }

            </View>
        </>
    )
};

const styles = StyleSheet.create({

    textStyle: {
        flexWrap: 'wrap',
        color: 'white',
        paddingLeft: 50,
        paddingBottom: 10,
        fontSize: 12
    },

    imgStyle: {
        marginLeft: 50,
        height: 100,
        width: 100,
        borderRadius: 14,
    }
});

export default RecipeFull;