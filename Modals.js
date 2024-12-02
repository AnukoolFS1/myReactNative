import { Modal, Text, View, Button } from "react-native";
import { useState } from "react";

export default function Modals() {
    const [modalView, setModalView] = useState(false)

    return (
        <View>
            <Button title="Modal" onPress={() => setModalView(true)} />
            <Modal visible={modalView} animationType="fade">
                <View>
                    <Text>
                        This is a Modal
                    </Text>
                    <Button title="Hide" onPress={() => setModalView(false)} />
                </View>
            </Modal>
        </View>
    )
}