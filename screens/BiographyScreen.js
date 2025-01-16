import { Text, StyleSheet, Image, SafeAreaView } from 'react-native'
import { ScrollView } from 'react-native'


function BiographyScreen() {

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>


                <Image source={require('../assets/blurredImage.png')} style={styles.image} />
                <Text style={styles.body}>
                    Some of my staple restaurants in Chinatown NYC from back in the day were Jolly King, Jing Fong, Joe's Shanghai, and Hop Shing. My natural interest in other Asian cuisines developed over the years from the diversity of Jackson Heights to the freshness and colors of Japanese sushi.
                </Text>

                <Text style={styles.body}>
                    Growing up in a multi-ethnic Italian community while passing by Latino/Mexican neighborhoods as I took the train back from high school, I was curious about foods other than my own. I spent time living abroad in Mexico and my Asian-American roots were reinvented and I experienced more than most teenagers.
                </Text>

                <Text style={styles.body}>
                    Moreover, I explored classical French technique in culinary school and incorporated it into my Asian heritage.
                </Text>
                <Text style={styles.body}>
                    I think food is a reflection of my life and experiences in the melting pot of New York City and am here to share it all with you.
                </Text>

            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#496779',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    body: {
        flex: 2,
        paddingTop: 20,
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 22,
        fontSize: 18,
        textAlign: 'center',
        backgroundColor: '#496779',
        color: 'white'
    },
    image: {
        alignItems: 'center',
        width: 100,
        height: 100,
        marginTop: 40,
        borderRadius: 100,
        justifyContent: 'center',
    }
})

export default BiographyScreen