import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import * as React from 'react'
import { useNavigation, useRoute, createNativeStackNavigator, useLinkProps } from '@react-navigation/native'


function Links({ title, name }) {
    const navigation = useNavigation()
  
    return (
        <>
            <Pressable onPress={() => navigation.navigate(`${name}`)}>
                <Text style={styles.linkText}>{title}</Text>
            </Pressable>
        </>
    )

}

const styles = StyleSheet.create({

    linkText: {
        color: 'white',
        fontSize: 17,
        marginTop: 10,
        marginRight: 20,

    },

}
)

export default Links