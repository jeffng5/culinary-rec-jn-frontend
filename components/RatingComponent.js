import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { Rating } from 'react-native-ratings'
import axios from 'axios'


const RatingComponent = ({ id }) => {

    const [onFunction, setOnFunction] = useState(false)
    const [input, setInput] = useState([])

    console.log(id)
    console.log('input', { input })

    const handleFinishRating = (rat) => {
        setInput(rat)
        setOnFunction(true)
    }
    const data = {
        ratings: { input },
        id: { id }
    }

    const postRating = async function () {
        if (onFunction == true) {
            try {
                const resp = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/ratings`, data)
                console.log(resp)
            } catch (err) {
                console.log(err)
            }
        }
    }

    return (

        <View>

            <Pressable onPress={() => postRating()}>
                <Rating style={styles.starBar}
                type='custom'
                ratingImage= {require('../assets/food/new-star.png')}
                ratingColor= 'goldenrod'
                ratingBackgroundColor='#496779'
                ratingCount={5}
                imageSize={18}
                // ratingBackgroundColor='turquoise'
                startingValue={0}
                onFinishRating={handleFinishRating}

                />
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    starBar: {
        justifyContent: 'left',
        flexDirection: 'column',        
        alignItems: 'left',
        marginLeft: 10,


    }

})


export default RatingComponent