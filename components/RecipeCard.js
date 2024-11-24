import { View, Text } from 'react-native'


const RecipeCard = ({name}) => {
    return (
        <>
        <View>
            <Text>
                {name}
            </Text>
        </View>
        </>
    )
}

export default RecipeCard;