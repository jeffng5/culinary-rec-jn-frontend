import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import Links from './Links'
import { useNavigation } from '@react-navigation/native'
import RecipeCard from './RecipeCard'



const RatingComponentReadOnly = ({ name, image_url, id, sumrating, divisor }) => {


    const navigation = useNavigation();

    /// This returns each card which includes image, rating, and link to individual recipe
    return (
        <>
            <View style={styles.textStyle}>

                <Image style={styles.imgStyle} source={`${process.env.EXPO_PUBLIC_IMAGES_URL}${image_url}`} />

                <RecipeCard sumrating={sumrating}
                    divisor={divisor} />
                <Links title={name} name={name} screen='Details' id={id} />
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