import { Button, ImageBackground } from "react-native";

const Pressive = () => {

    return (
        <>
            <Button title="button"
                style={{ backgroundColor: 'cornflowerblue' }}
                color={'lime'}
                // disabled={true}
                onPress={() => console.log('hello user')} />
        </>
    )
}

export default Pressive