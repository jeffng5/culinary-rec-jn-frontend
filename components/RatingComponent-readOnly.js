import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Rating } from 'react-native-ratings'
import axios from 'axios'


const RatingComponentReadOnly = ({ sumrating, divisor }) =>{

    const rated = (sumrating / divisor)
    // const [individualRecipe, setIndividualRecipe] = useState([]);
    // const [input, setInput] = useState(false)




    return (
   
        <View style= {styles.starBar}>
        
     
        <Rating style= {styles.starBar}
        type='star'
        ratingCount={5}
        imageSize={17}
        ratingBackgroundColor= '#496779'
        readonly
        startingValue={rated}
        // onRatingPress= {(rating) => setInput(rating)}
       
     />

    </View>
  
    )
}

const styles = StyleSheet.create({
    starBar: {
        textAlign: 'left',
        marginLeft: 10,


    }

})


export default RatingComponentReadOnly