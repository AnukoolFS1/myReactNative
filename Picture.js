import { Image } from "react-native";
import img from './assets/adaptive-icon.png'

const Picture = () => {

    return (
        <>
            <Image source={img} style={{ width: 300, height: 300 }} />
            <Image source={{uri:"https://images.pexels.com/photos/26545646/pexels-photo-26545646/free-photo-of-copper-colored-metal-wall-panels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} style={{width:200, height: 300}} />
        </>
    )
}

export default Picture