import { Text, View, SafeAreaView, ScrollView } from 'react-native'


function ContactScreen() {

    return (
        <SafeAreaView>
            <View style={{backgroundColor: '#496779'}}>
        <Text style= {{fontSize: 17, color: 'white', textAlign: 'center'}}>Made by JN Web Solutions
       </Text>
       <Text style= {{fontSize: 10, color: 'white', textAlign: 'center'}}>
       © All Rights Reserved 2025
       </Text>
        </View>
        </SafeAreaView>
    )
}



export default ContactScreen