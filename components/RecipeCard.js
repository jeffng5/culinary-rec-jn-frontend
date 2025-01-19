import { StyleSheet, Text, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Rating } from 'react-native-ratings';
import React, { useState, useEffect, useContext } from 'react'
import RatingComponentReadOnly from './RatingComponent-readOnly';
import axios from 'axios'

// gets individual recipe 

const RecipeCard = ({ sumrating, divisor }) => {

    let rated = (sumrating / divisor)
    console.log('RATING',  rated )
    // const getRecipeRatings = async function () {
    //     let URL = {
    //         method: 'GET',
    //         url: 'http://localhost:5002/get-all-ratings',
    //         params : {id: id },
    //         headers: { 'content-type': 'application/json'}
    //     }
    //     try {
    //         await axios.request(URL).then((resp) => {
    //             console.log('ratingsField', resp.data)

    //         } 
    //         )
    //         ;
    //     } catch (error) {
    //         console.log(error)
    //     }
    // };

    // useEffect(()=> {
    //     getRecipeRatings()
    // }, [])

if (rated){
    return (
        <>
            <Rating style= {styles.starBar}
                type='star'
                ratingCount={5}
                imageSize={17}
                ratingBackgroundColor='#486779'
                readonly
                startingValue={rated}
            />


        </>
    )} 
    
else {
    return (
        <>
        <Rating style= {styles.starBar}
            type='star'
            ratingCount={5}
            imageSize={17}
            ratingBackgroundColor='#486779'
            readonly
            startingValue={0}
        />
        <Text style= {styles.textStyle}>Not Rated Yet</Text>


    </>
    )
    }
};

const styles = StyleSheet.create({

    textStyle: {
        fontFamily: 'Arial',
        flexWrap: 'wrap',
        color: 'white',
        fontSize: 14,
        marginLeft: 37,
        textAlign: 'left'
    },

    buttonStyle: {
        width: 50,
    },

    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    },
    starBar: {
        marginTop: 10,
        paddingLeft: -20,
        textAlign: 'left',
        alignItems: 'left'

    }
});


export default RecipeCard;