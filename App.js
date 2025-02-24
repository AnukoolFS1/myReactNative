import { View, Pressable, StatusBar } from 'react-native';
import Writing from './Writing';
import Picture from './Picture';
import Pressive from './Pressive';
import Scrolling from './Scrolling';
import Modals from './Modals';

export default function App() {
  return (
    <View style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "cornflowerblue", padding: 50 }}>
      {/* <Pressable onPress={() => console.log(`pressed on writig`)}>
        <Writing />
      </Pressable>
      <Pressable onLongPress={() => console.log('picture has long pressed')}>
        <Picture />
      </Pressable>
       <Pressable onPressOut={() => console.log('scrolling was pressed out')}>
        <Scrolling />
      </Pressable> 
      <Pressive />
      <Modals ></Modals> */}
      <StatusBar backgroundColor={"lime"} barStyle={"dark-content"} hidden={false}  />
    </View>
  )
}