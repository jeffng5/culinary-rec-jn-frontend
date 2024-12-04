import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute, createNativeStackNavigator, useLinkProps } from '@react-navigation/native'


function Links({ title, onPress }) {

    const linkProps = useLinkProps({ to: { name : `/${name}` }})
    console.log(linkProps)
    return (
        <>
            <Pressable {...linkProps} onPress={onPress}>
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
        marginRight: 30,

    },

}
)

export default Links