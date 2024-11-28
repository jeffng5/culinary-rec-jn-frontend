import { View , Text, StyleSheet } from 'react-native'
import Health from './Health'

const Wine = () => {
    return (
        <>
        <View styles={{gap: 20, flexDirection: 'row'}}>
         <View style = {{borderTopColor: 'black', borderTopWidth: 1.5, marginTop: 10, marginLeft: 20, marginRight: 20, width: '20%'}}></View>
            <View> 
                <Text style = {styles.heading}>WINE</Text>
            
            </View>

            <Text style = {styles.body}>
            Even as someone who only drinks once in a blue moon, on special occasions, I do drink wine with my meals. I have highlighted some rules and my favorites because I think they pair well with my food and hope you can enjoy it the same way I do. 
            </Text>
            <View style = {{borderBottomColor: 'black', borderBottomWidth: 1.5, marginBottom: 30, marginLeft: 20, marginRight: 20, marginTop: 10, width: '20%'}}></View>
        
        
        <Health />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading : {
        flexWrap: 'flex',
        marginLeft: 30,
        marginRight: 30,
        fontSize : 38,
        fontStyle: 'bold',
        width: '25%'
    },
    body : {
        flexWrap: 'flex',
        width: '20%',
        marginLeft: 30}

})
;
export default Wine;