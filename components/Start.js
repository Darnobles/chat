import { useState } from "react";
import image from "../image/Background-Image.png";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}></ImageBackground>
      <Text>Hello Screen1!</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={setName}
        placeholder="Type your username here"
      />
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    justifyContent: "center",
  },
});

export default Start;
