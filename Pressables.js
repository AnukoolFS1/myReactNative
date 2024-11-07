import { View, Pressable, Text, Image } from 'react-native';
import img from './assets/splash.png'

const Pressables = () => {
    return (
        <View>

            <Pressable onPress={()=>console.log("image has pressed")}>
                <Image source={img} style={{width:300, height: 400}} />
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