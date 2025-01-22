import { View, Text, StyleSheet, Image} from 'react-native'


const HeadLogo = () => {

return (

<View style={styles.container}>
<View style = {{flexDirection: 'row', paddingTop: 8, paddingBottom: 8, marginTop: 7, marginBottom: 7, flexWrap: 'wrap', width: 490, justifyContent: 'center'}}>
    <View style= {{paddingTop: 5, paddingBottom: 5}}>
<Image style={styles.imgSize} source={require('../assets/white_logo_cropped.png')} />
</View> 
<Text style = {styles.headerText}>Chef Jeff's Recipes</Text>
 </View>

    </View>

)
};
export default HeadLogo;

const styles = StyleSheet.create({
    container: {
    marginTop: 0,
    paddingTop: 10,
    paddingBottom: 10,
      justifyContent: 'center',
      backgroundColor: '#496779',
      color: 'white',
      fontWeight: 'bold',
      flexDirection: 'row'
    },
    imgSize: {
      paddingTop: 6,
      paddingBottom: 6,  
      height: 72,
      width: 60,
      borderRadius: 20,
      marginRight: 10
    }
    ,

  headerText: {
    marginTop: 12,
    marginRight: 0,
    flexWrap: 'wrap',
    width: 150,
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
    paddingRight: 0
  }

}  );

