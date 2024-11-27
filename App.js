import { View } from 'react-native';
import Writing from './Writing';
import Picture from './Picture';

export default function App() {
  return (
    <View style={{flex:1,display:"flex",justifyContent:"center", alignItems:"center", backgroundColor:"cornflowerblue"}}>
      <Writing />
      <Picture />
    </View>
  )
}