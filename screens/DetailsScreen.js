import { Text, StyleSheet, Image, View, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios'
import { useRoute } from '@react-navigation/native';
import { Rating } from 'react-native-ratings';
import RatingComponent from '../components/RatingComponent'

// Details contain the recipe procedure, image and name 
// receives route params from RecipeCard.js from the <Link> component
function DetailsScreen() {

    const route = useRoute()
    const { name, id } = route.params

    console.log(name);
    console.log('target this', id)

    console.log('THIS IS IT', name)



    const [individualRecipe, setIndividualRecipe] = useState([]);
    const [imgURL, setImgURL] = useState([]);
    const [nameRec, setNameRec] = useState([]);
    const [rating, setRating] = useState([]);
    const [ID, setID] = useState(id);



    //API Call to backend to get the indiv. recipes' image_url, procedure, and name
    async function getIndividualRecipes() {
        console.log('I AM HERE NAME')
        let URL = {
            method: 'GET',
            url: 'http://localhost:5002/individual-recipes',
            params: { ids: name },
            headers: { 'content-type': "application/json" }
        }

        try {
            await axios.request(URL).then((response) => {
                console.log(response)
                const r = response.data;
                console.log("photo", r[0].image_url)
                console.log(r[0].name)
                setIndividualRecipe(r)
                setImgURL(r[0].image_url)
                setNameRec(r[0].name)
                setRating((r[0].sumrating / r[0].divisor))
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
    console.log({ rating })
    return (

        <SafeAreaView style={styles.container}>

            <ScrollView>
                <Text style={styles.title}>{nameRec}</Text>
                <Image style={styles.imgStyle} source={`http://localhost:5002/static/food/${imgURL}`} />

                {individualRecipe.map(r => (<View>
                    <Text style={styles.textStyle}>
                        {r.step_no}. {r.procedure}</Text>

                </View>

                ))};

                <View><Text style={styles.title}>
                    Rate This:</Text></View>
                <RatingComponent id={ID} >


                </RatingComponent>

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
        marginLeft: 35
    },
    textStyle: {
        color: 'white',
        marginLeft: 50,
        paddingBottom: 10,
        marginTop: 11,
        marginRight: 50
    },
    imgStyle: {
        height: 300,
        width: 300,
        borderRadius: 14,
        marginLeft: 50,
        padding: 15,
    },
    ratingStyle: {
        color: '#496779'
    }
})
export default DetailsScreen