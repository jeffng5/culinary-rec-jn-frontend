import { View , Text, StyleSheet } from 'react-native'

const Health = () => {
    return (
        <View>
         <View style = {{borderTopColor: 'black', borderTopWidth: 1.5, marginTop: 10, marginLeft: 20, marginRight: 20, width: '20%'}}></View>
            <View> 
                <Text style = {styles.heading}>HEALTH</Text>
            
            </View>

            <Text style= {styles.body}>
            Healthy eating should be a priority in our habits, but is not limited to saturated fat, vitamins, and minerals. For people that battle diabetes, or are at risk, a low carb diet is essential. A low carb diet would make the body more sensitive to sugar and help us feel fuller with less food. But please check with your doctor before you get on any diet.  
            </Text>
            <View style = {{borderBottomColor: 'black', borderBottomWidth: 1.5, marginBottom: 30, marginLeft: 20, marginRight: 20, marginTop: 10, width: '20%'}}></View>
        </View>
        

    )
}

const styles = StyleSheet.create({
    heading : {
        flexWrap: 'flex',
        marginLeft: 30,
        marginRight: 30,
        fontSize : 38,
        fontStyle: 'bold',
    },
    body : {
        flexWrap: 'flex',
        width: '20%',
        marginLeft: 30,
    }

})
;
export default Health;