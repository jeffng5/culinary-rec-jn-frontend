import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Rating } from 'react-native-ratings'
import axios from 'axios'


const RatingComponent = ({id, rating}) =>{

    const r = rating
    console.log('R,', r)
    const [ratings, setRatings] = useState([]);
    const [input, setInput] = useState(null)

    console.log(id) 
    console.log('input', {input})

    const data = {
        ratings: {input},
        id: {id}
    }
    
    const postRating = async function() {
        try {
            const resp = await axios.post('http://localhost:5002/ratings', data)
            console.log(resp)
        } catch(err) {
            console.log(err)
        }
    }

  

    useEffect(() => {
        postRating();

    }, [])

    console.log({ratings})
    return (
   
        <View style= {styles.starBar}>
        
        <Pressable onPress={() => postRating() }>
        <Rating style= {styles.starBar}
        type='star'
        ratingCount={5}
        imageSize={17}
        ratingBackgroundColor= '#496779'
        startingValue={ratings}
        onFinishRating= {(rating) => setInput(rating)}
       
     />
    </Pressable>
    </View>
  
    )
}

const styles = StyleSheet.create({
    starBar: {
        textAlign: 'left',
        marginLeft: 10,


    }

})


export default RatingComponent