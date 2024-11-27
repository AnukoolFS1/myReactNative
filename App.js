import { View } from 'react-native';
import Writing from './Writing';
import Picture from './Picture';
import Pressive from './Pressive';
import Scrolling from './Scrolling';

export default function App() {
  return (
    <View style={{flex:1,display:"flex",justifyContent:"center", alignItems:"center", backgroundColor:"cornflowerblue", padding: 50}}>
      <Writing />
      {/* <Picture /> */}
    <Scrolling />
      <Pressive />
    </View>
  )
}