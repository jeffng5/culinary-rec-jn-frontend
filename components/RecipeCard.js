import { Text, StyleSheet, ScrollView, Image, View, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import axios from 'axios'



const RecipeCard = ({ name, image, key }) => {

    const [individualRecipe, setIndividualRecipe] = useState([]);
    const [isPressed, setIsPressed] = useState(false)

    console.log(name)

    async function pressHandler() {

        if (isPressed == false) {
    
            setIsPressed(true)

        let URL = {
            method: 'GET',
            url: 'http://localhost:5002/individual-recipes',
            params: { ids: name },
            headers: { 'content-type': "application/json" }
        }
        try {
            await axios.get(URL).then((response) => {
                const r = response.data;
                setIndividualRecipe(r)
                setIsPressed(false)
                console.log('response obj = ', r)
            })
            
        } catch (err) {
            console.error(err)
        }

    }
};


    return (
        <>
            {key}
            <Image style={styles.imgStyle} source={require(`../assets/food/bistecCebolla.png`)} />
    
            <Pressable onPress={pressHandler} style={styles.textStyle}>{name}</Pressable>
        
            {individualRecipe}
        </>
    )
}
;


const styles = StyleSheet.create({

    textStyle: {
        fontFamily: 'Arial',
        flexWrap: 'wrap',
        color: 'white',
        paddingBottom: 10,
        fontSize: 12,
        marginLeft: 50
    },

    imgStyle: {
        height: 100,
        width: 100,
        borderRadius: 14,
        marginLeft: 50,
    }
});


export default RecipeCard;