import { ImageComponent, StyleSheet, Text, View, Image, Button, ScrollView, FlatList } from 'react-native';

export default function Toolbar()  {

    return (
        <>
         <View style={styles.container}>
<View style = {{flexDirection: 'row'}}> 
<Image style={styles.imgSize} source={require('../assets/logo.png')} />
<Text style = {styles.headerText}>Chef Jeff's recipes</Text>
 </View>
 <View style = {{ borderBottomColor: 'black', borderBottomWidth: 1.5, marginTop: 10, marginLeft: 20, marginRight: 20, width: '75%' }}></View>
 <View style={{flexDirection:'row', marginLeft: 40, justifyContent: 'left', paddingTop: 0, width: '75%', flexWrap: 'wrap'}}>
  {/* <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component = {App} />
      <Stack.Screen name= 'biography' component = {biographyScreen} />
    </Stack.Navigator>
  </NavigationContainer> */}

  <Text style={styles.linkText}>home</Text>

  <Text style={styles.linkText}>favorites</Text>

  <Text style={styles.linkText} >biography</Text>
  
  <Text style={styles.linkText}>wine</Text>

  <Text style= {styles.linkText}>health suggestions</Text>
  
  <Text style={styles.linkText}>contact</Text>
</View>
<View style = {{ borderBottomColor: 'black', borderBottomWidth: 1.5, marginLeft: 20, paddingTop: 10, marginRight:20, width: '75%' }}></View>

</View>
</>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
      paddingTop: 30,
      backgroundColor: 'white',
      color: 'black',
      fontWeight: 'bold'
    },
    imgSize: {
      marginLeft: 20,
      height: 80,
      width: 80
    }
    ,

  headerText: {
    marginTop: 20,
    marginLeft: 10,
    color: 'black',
    fontSize: 25,
    textAlign: 'left',
    paddingRight: 0
  },

  linkText: {
    color: 'black', 
    marginRight: 40, 
    fontSize: 18,
    marginTop: 10
  }
}
)

