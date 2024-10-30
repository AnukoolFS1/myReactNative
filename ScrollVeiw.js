import { ScrollView, Image, Text } from "react-native";
import img from './assets/adaptive-icon.png'

function ScrollViewC() {

    return (
        <ScrollView>
            <Image source={img} style={{width: 300, height: 300}} />
            <Text style={{color: "white", textAlign:"justify"}}>
                A paragraph is a group of sentences that are related and work together to convey a single idea:
                Structure.
                A paragraph is typically made up of a topic sentence, body sentences, and a concluding sentence. The topic sentence is usually the first sentence and states the main idea of the paragraph. The body sentences provide details to support the main idea. The concluding sentence may restate or summarize the main idea.
                Purpose.
                Paragraphs help readers understand the organization of a piece of writing and grasp its main points. They also help writers transition from one thought to another.
                Length.
                A paragraph is usually around 250 words and consists of five or six sentences. However, the length can vary depending on the purpose of the paragraph and the length of the piece. In some writing styles, like journalism, a paragraph can be as short as one sentence.
                Indentation.
                A new paragraph is usually indicated by a new indentation, such as a tab or five spaces. This signals to the reader that the topic has concluded and is moving on.
                Here are some tips for writing paragraphs:
                Make sure each paragraph has a clear key idea.
                State the key idea in the first half of the first sentence of the paragraph.
                Split a paragraph into two shorter paragraphs if it goes off on a tangent.
                Insert a paragraph break when you are transitioning between ideas or adding a new line of thought
            </Text>
        </ScrollView>
    )
}

export default ScrollViewC