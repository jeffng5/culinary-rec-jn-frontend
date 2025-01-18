import { StyleSheet, Image, View} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Links from './Links'
import { Rating } from 'react-native-ratings';
import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'

// gets individual recipe 

const RecipeCard = ({ name, image_url, id }) => {

    const [ratedState, setRatedState] = useState([])

    const navigation = useNavigation();

    console.log('ID', id)
    const getRecipeRatings = async function () {
        let URL = {
            method: 'GET',
            url: 'http://localhost:5002/get-all-ratings',
            params : {id:  {id} },
            headers: { 'content-type': 'application/json'}
        }
        try {
            await axios.request(URL).then((resp) => {
                const r = resp.data;
                console.log('R', r)
                if (resp.data[0].id == id) {
                    let rated = (resp.data[0].sumrating / resp.data[0].divisor)
                    setRatedState(rated)
                    }
                    else {
                        console.log('NO rating yet')
                        return
                    }
                    console.log('RATED', rated)
            })
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=> {
        getRecipeRatings()
    }, [])

    
    return (
        <View style= {styles.textStyle}>
                        
            
            <Image style={styles.imgStyle} source = {`http://localhost:5002/static/food/${image_url}`} />
            <Rating type='star'
            ratingCount={5}
            imageSize={17}
            ratingBackgroundColor= '#496779'
            readonly
            startingValue={ratedState} /> 
            
            <Links title = {name} name = {name} id = {id} screen='Details'/>

            
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
        marginLeft: 50,
        textAlign: 'left'
    },

    buttonStyle: {
        width: 50,
    },

    imgStyle: {
        height: 120,
        width: 120,
        borderRadius: 14
    },
    starBar: {
        textAlign: 'left',
        paddingLeft: 50

    }
});


export default RecipeCard;