import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Links from './Links'
import { useNavigation } from '@react-navigation/native'
import { Rating } from 'react-native-ratings'
import axios from 'axios'
import RecipeCard from './RecipeCard'
import TagContext from '../hooks/TagContext'


const RatingComponentReadOnly = ({ name, image_url, id, sumrating, divisor }) =>{

    const { rated } = useContext(TagContext)
    const navigation = useNavigation();

    const ratedCtx = useContext(TagContext)
    const [input, setInput] = useState(sumrating/divisor)
    console.log('RATED', rated)



    return (
        <>

   
        <View style= {styles.textStyle}>
        
        <Image style={styles.imgStyle} source = {`http://localhost:5002/static/food/${image_url}`} />
        
        <Rating
        type ='star'
        ratingCount={5}
        imageSize= {17}
        ratingBackgroundColor = '#486779'
        readonly 
        startingValue = {rated}
        />

        <Links title = {name} name = {name} screen = 'Details' id = {id} /> 

       
     

    </View>
    </>
    )
}

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
    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    },
    starBar: {
        textAlign: 'left',
        marginLeft: 10,


    }

})


export default RatingComponentReadOnly