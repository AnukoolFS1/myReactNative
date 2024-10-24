import { View, Text, Image, ImageBackground } from 'react-native'
import image from './assets/adaptive-icon.png'
export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      {/* <Text><Text style={{ color: "white" }}>Hello</Text> World</Text> */}
      {/* <Image source={image} style={{width: 250, height: 300}} /> */}
      <Image source={{uri:'https://images.pexels.com/photos/16549340/pexels-photo-16549340/free-photo-of-distant-view-on-templo-de-san-antonio-aguascalientes-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}} style={{width: 300, height: 300}} />
  <ImageBackground source={{uri:'https://images.pexels.com/photos/16549340/pexels-photo-16549340/free-photo-of-distant-view-on-templo-de-san-antonio-aguascalientes-mexico.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'}} style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center'}}>

        <Text style={{color: "white"}}>This is foreign out of you budget</Text>

  </ImageBackground>
    </View>)
}