import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import Links from './Links'
import { useNavigation } from '@react-navigation/native'
import RecipeCard from './RecipeCard'



const RatingComponentReadOnly = ({ name, image_url, id, sumrating, divisor }) => {


    const navigation = useNavigation();

    /// This returns each card which includes image, rating, and link to individual recipe
    return (
        <>
            <View style={styles.textStyle}>
                <ScrollView>
                <Image style={styles.imgStyle} source={`${process.env.EXPO_PUBLIC_IMAGES_URL}${image_url}`} />
                <Links title={name} name={name} screen='Details' id={id} />
                <RecipeCard style= {styles.cardStyle} sumrating={sumrating}
                    divisor={divisor} />

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Arial',
        flexWrap: 'wrap',
        color: 'white',
        paddingBottom: 45,
        fontSize: 8,
        marginLeft: 44,

        textAlign: 'left'
    },
    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    },
    cardStyle : {
        marginLeft: -50,
    }

})


export default RatingComponentReadOnly