import { StyleSheet, Image, View} from 'react-native';
import { useState } from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Links from './Links'
import RatingComponentReadOnly from './RatingComponent-readOnly';


// gets individual recipe 

const RecipeCard = ({ name, image_url, id, divisor, sumRating}) => {

    const navigation = useNavigation();

    console.log('divisor', divisor)
    console.log('sumRating', sumRating)
    const mean = (sumRating / divisor)

    const [individualRecipe, setIndividualRecipe] = useState([]);
    const [isPressed, setIsPressed] = useState(false)
    const [ratingProp, setRatingProp] = useState(mean)

    console.log('ratingProp', ratingProp)
 
    async() => {

        let URL = {
            method: 'GET',
            url: 'http://localhost:5002/individual-recipes',
            params: { ids: name },
            headers: { 'content-type': "application/json" }
        }
        try {
            await axios.request(URL).then((response) => {
                const r = response.data;
                setIndividualRecipe(r)
                setIsPressed(false)
                console.log('response obj = ', r)
            })
            
        } catch (err) {
            console.error(err)
        }
  
    };

// {id}

    return (
        <View style= {styles.textStyle}>
                        
            
            <Image style={styles.imgStyle} source = {`http://localhost:5002/static/food/${image_url}`} />
            <RatingComponentReadOnly style={styles.starBar} rating = {ratingProp} id = {id}/>
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