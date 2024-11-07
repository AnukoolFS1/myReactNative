import { View, Pressable, Text, Image } from 'react-native';
import img from './assets/adaptive-icon.png'

const Pressables = () => {
    return (
        <View style={{padding:0}}>
            <Pressable onPressIn={()=>console.log("image has pressed")}>
                <Image source={img} style={{width:300, height:300}} />
            </Pressable>
            <Pressable onPress={()=>console.log("text has pressed")}>
                <Text>
                    this is the text
                </Text>
            </Pressable>
        </View>
    )
}

export default Pressables