import { Image } from "react-native";
import img from './assets/adaptive-icon.png'

const Picture = () => {

    return (
        <Image source={img} style={{width:300, height:300}}/>
    )
}

export default Picture