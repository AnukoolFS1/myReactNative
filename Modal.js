import {Modal, View, Button, Text} from 'react-native';
import { useState } from 'react';


function Modals() {
    const [modalView, setModalView] = useState(false)
    return (
        <View>
            <Button title='Press' color={"blue"} onPress={() => setModalView(true)}  />
            <Modal
             visible={modalView}
             >
                <View style={{backgroundColor:"lightblue"}}>
                    <Text style={{color:"white"}}>Modal Component</Text>
                    <Button title="close" color="red" onPress={() => setModalView(false)}/>
                </View>
            </Modal>
        </View>
    )
}

export default Modals