import { Text, StyleSheet, Image, View, SafeAreaView } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import TagContext from '../hooks/TagContext';
import { ScrollView } from 'react-native';
import axios from 'axios'




function DetailsScreen() {

    const [individualRecipe, setIndividualRecipe] = useState([]);
    const [imgURL, setImgURL] = useState('')
    const [nameRec, setNameRec ] = useState('')


    async function getIndividualRecipes () {

        let URL = {
            method: 'GET',
            url: 'http://localhost:5002/individual-recipes',
            params: { ids: 'Lemon and herb roasted chicken' },
            headers: { 'content-type': "application/json" }
        }
        try {
            await axios(URL).then((response) => {
                console.log(response)
                const r = response.data;
                setIndividualRecipe(r)
                setImgURL(r[0].image_url)
                setNameRec(r[0].name)
                console.log('response obj = ', r)
            })
            
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        getIndividualRecipes();
    }, []);

   console.log(individualRecipe)
   const image = imgURL
    return (
        <SafeAreaView style = {styles.container}>
            <ScrollView>
         
            <Text style= {styles.title}>{nameRec}</Text>
            <Image style={styles.imgStyle} source = {`http://localhost:5002/static/food/${image}`} />
            
            {individualRecipe.map(r => (<View>
            <Text style = {styles.textStyle}>
            {r.step_no}. {r.procedure}</Text>
         
            
            </View>
                
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#496779'
    },
    title: {
        fontSize: 25,
        color: 'white',
        padding: 15,
    },
    textStyle: {
        color: 'white',
        marginLeft: 50,
        paddingBottom: 10,
        marginTop: 11
    },
    imgStyle: {
        height: 200,
        width: 200,
        borderRadius: 14,
        marginLeft: 50,
        padding: 15,
    }
})
export default DetailsScreen