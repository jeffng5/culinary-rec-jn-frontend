import { StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import * as React from 'react'
import RecipeFull from '../components/RecipeFull';
import Wine from '../components/Wine';
import Health from '../components/Health'
import { TagContextProvider } from '../hooks/TagContext';
import Toolbar from '../components/Toolbar';


export default function HomeScreen() {


    return (
        <TagContextProvider>
           
                <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <Toolbar />

                    <View style={styles.placement}>
                        <RecipeFull />
                    </View>

                    <View style={styles.comp}>
                        <Wine />
                        <Health />
                    </View>
                    </ScrollView>
                </SafeAreaView>
           
            </TagContextProvider> 
    )
}

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#496779',
        color: 'white',
        fontWeight: 'bold',
        height: '100%',
        padding: 5,
    },

    placement: {
        fontSize: 10,
        flexDirection: 'column',
        fontWeight: 'bold',
    },
    comp: {
        flexDirection: 'row'
    },

    scrollview: {
        overflow: 'hidden'
    }


});


