import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native'


const RecipeCard = ({ name }) => {
    return (

            <Text style={styles.textStyle}>
                {name}
            </Text>
        
    )
}



const styles = StyleSheet.create({

    textStyle: {
        color: 'white',
        paddingLeft: 50,
        paddingBottom: 10
    }
});


export default RecipeCard;