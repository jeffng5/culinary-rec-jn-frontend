import { StyleSheet, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Rating } from 'react-native-ratings';
import React, { useState, useEffect, useContext } from 'react'
import RatingComponentReadOnly from './RatingComponent-readOnly';
import axios from 'axios'

// gets individual recipe 

const RecipeCard = ({sumrating, divisor}) => {
    function operation(sumrating, divisor) {
        let rated =  sumrating/divisor
        return rated
    }

    let rated = operation(sumrating, divisor)
    console.log('RATED', operation(sumrating, divisor))
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

    
    return (
<>
{rated}
</>
    )
    };

const styles = StyleSheet.create({

    textStyle: {
        fontFamily: 'Arial',
        flexWrap: 'wrap',
        color: 'white',
        paddingBottom: 20,
        fontSize: 8,
        marginLeft: 50,
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
        textAlign: 'left',
        paddingLeft: 50

    }
});


export default RecipeCard;