import { StyleSheet, Image, View} from 'react-native';
import { useState } from 'react';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Links from './Links'


// gets individual recipe 

const RecipeCard = ({ name, image_url, id}) => {

    const navigation = useNavigation();

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
        
            <Links title = {name} name = {name} screen='Details'/>

            {/* {individualRecipe.map(r => (<View><Text>{r.name}
            {r.step_no}{r.procedure}</Text></View>))} */}
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