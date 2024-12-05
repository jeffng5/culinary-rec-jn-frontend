import { Text, StyleSheet, ScrollView } from 'react-native'


const RecipeCard = ({  name }) => {
   
    return (
        <>
            <Text style={styles.textStyle}>  
                {name}
            </Text>
        </>
    )
}



const styles = StyleSheet.create({

    textStyle: {
        flexWrap: 'wrap',
        color: 'white',
        paddingLeft: 50,
        paddingBottom: 10,
        fontSize: 12
    }
});


export default RecipeCard;