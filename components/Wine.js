import { View , Text, StyleSheet } from 'react-native'
import Health from './Health'

const Wine = () => {
    return (
        <>
        <View styles={{gap: 20, flexDirection: 'row', color: 'white'}}>
         <View style = {{borderTopColor: 'white', borderTopWidth: 1.5, marginTop: 10, marginLeft: 20, paddingRight: 20, width: '20%', flexWrap: 'wrap'}}></View>
            <View> 
                <Text style = {styles.heading}>WINE</Text>
            
            </View>

            <Text style = {styles.body}>
            Even as someone who only drinks once in a blue moon, on special  
            occasions, I do drink wine with my meals. I have highlighted some rules and my favorites because I think they pair well with my food and hope you can enjoy it the same way I do. 
            </Text>
            <View style = {{borderBottomColor: 'white', borderBottomWidth: 1.5, marginBottom: 30, marginLeft: 20, marginRight: 20, marginTop: 10, width: '20%', flexWrap: 'wrap'}}></View>
        
        
        <Health />
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    heading : {
        color: 'white',
        marginLeft: 12,
        marginRight: 30,
        fontSize : 38,
        fontStyle: 'bold',
        width: '25%'
    },
    body : {
        color: 'white',
        flexWrap: 'flex',
        width: '17%',
        marginLeft: 12
    }

})
;
export default Wine;