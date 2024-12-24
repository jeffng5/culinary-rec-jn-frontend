import { Text, StyleSheet, ScrollView, Image, Button, View, Pressable } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import TagContext from '../hooks/TagContext';
import DetailsScreen from '../screens/DetailsScreen';
import { useNavigation } from '@react-navigation/native'
import Links from './Links'



const RecipeCard = ({ name, image_url, id}) => {

    const navigation = useNavigation();

    console.log(name)

    const [individualRecipe, setIndividualRecipe] = useState([]);
    const [isPressed, setIsPressed] = useState(false)

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
            await axios(URL).then((response) => {
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
{id}

    return (
        <View style= {styles.textStyle}>
                        
            
            <Image style={styles.imgStyle} source = {`http://localhost:5002/static/food/${image_url}`} />
    
            {/* <Pressable onPress={pressHandler} style={styles.textStyle}>{name}</Pressable> */}
        
            <Links title = {name} onPress = {() => navigation.navigate(DetailsScreen)} name = 'Details'/>

            {individualRecipe.map(r => (<View><Text>{r.name}
            {r.step_no}{r.procedure}</Text></View>))}
        </View>
    )
}
;


const styles = StyleSheet.create({

    textStyle: {
        fontFamily: 'Arial',
        flexWrap: 'wrap',
        color: 'white',
        paddingBottom: 20,
        fontSize: 8,
        marginLeft: 50
    },

    buttonStyle: {
        width: 50,
    },

    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    }
});


export default RecipeCard;