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
        <View style={styles.ratingContainer}>
            <Rating style= {styles.starBar}
                type='custom'
                ratingImage= {require('../assets/food/new-star.png')}
                ratingColor= 'goldenrod'
                ratingBackgroundColor='#496779'
                ratingCount={5}
                imageSize={18}
                // ratingBackgroundColor='turquoise'
                readonly
                startingValue={rated}
            />


        </View>
    )} 
    
else {
    return (
        <View style={styles.ratingContainer}>
        <Rating style= {styles.starBar}
            type='custom'
            ratingImage= {require('../assets/food/new-star.png')}
            ratingColor= 'goldenrod'
            ratingBackgroundColor='#496779'
            ratingCount={5}
            imageSize={18}
            readonly
            startingValue={0}
        />
    


    </View>
    )
    }
};

const styles = StyleSheet.create({

    ratingContainer: {
        padding: 0,
        marginLeft: -40,
        marginTop: 5,
    },

    // textStyle: {
    //     fontFamily: 'Arial',
    //     flexWrap: 'wrap',
    //     color: 'white',
    //     fontSize: 14,
    //     marginLeft: 17,
    //     textAlign: 'left'
    // },

    buttonStyle: {
        width: 50,
    },

    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    },
    // starBar: {
    //     marginTop: 10,
    //     flexDirection: 'column',
    //     paddingLeft: 0,
    //     padding: 0
 
    // }
});


export default RecipeCard;