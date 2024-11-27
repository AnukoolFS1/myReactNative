import { View } from 'react-native';
import Writing from './Writing';
import Picture from './Picture';
import Pressive from './Pressive';

export default function App() {
  return (
    <View style={{flex:1,display:"flex",justifyContent:"center", alignItems:"center", backgroundColor:"cornflowerblue"}}>
      <Writing />
      <Pressive />
      {/* <Picture /> */}
    </View>
  )
}