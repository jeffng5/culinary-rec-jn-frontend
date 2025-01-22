import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Rating } from 'react-native-ratings'
import axios from 'axios'


const RatingComponent = ({ id }) =>{


    const [input, setInput] = useState(null)

    console.log(id) 
    console.log('input', {input})

    const handleFinishRating = (rat) => {
        setInput(rat)
    }
    const data = {
        ratings: {input},
        id: {id}
    }
    
    const postRating = async function() {
        try {
            const resp = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/ratings`, data)
            console.log(resp)
        } catch(err) {
            console.log(err)
        }
    }

  

    useEffect(() => {
        postRating();

    }, [])


    return (
   
        <View>
        
        <Pressable onPress={() => postRating() }>
        <Rating style= {styles.starBar}
        type='star'
        ratingCount={5}
        imageSize={20}
        ratingBackgroundColor= '#496779'
        startingValue={0}
        onFinishRating= {handleFinishRating}
       
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