import { View, Button } from 'react-native'

const CButton = () => {
    return (
        <Button title='Button' color={'darkslategrey'} onPress={() => console.log("button pressed")} disabled={true} />
    )
}

export default CButton