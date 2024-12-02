import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';
import HeadLogo from './HeadLogo'

export default function Toolbar()  {

    return (
        <>
<HeadLogo/>

 <View style = {{borderTopColor: 'white', borderTopWidth: 1.5, marginTop: 10}}></View>
 {/* <View style={styles.linkView}> */}
  {/* <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component = {App} />
      <Stack.Screen name= 'biography' component = {biographyScreen} />
    </Stack.Navigator>
  </NavigationContainer> */}
 <View style = {{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 45, marginRight: 45, justifyContent: 'center'}}>
  {/* <Text style={styles.linkText}>home</Text> */}

  <Text style={styles.linkText}>favorites</Text>

  <Text style={styles.linkText} >biography</Text>
  
  {/* <Text style={styles.linkText}>wine</Text>

  <Text style= {styles.linkText}>health</Text> */}
  
  <Text style={styles.linkText}>contact</Text>
</View> 

<View style = {{borderBottomColor: 'white', borderBottomWidth: 1.5, marginBottom: 30, marginTop: 10}}></View>


</>
    )};

    const styles = StyleSheet.create({
 
      linkText: {
        color: 'white', 
        fontSize: 17,
        marginTop: 10,
        marginRight: 30,

      },

    }
    )

