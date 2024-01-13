import { useState } from "react";
import image from "../image/Background-Image.png";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");

  const [backgroundColor, setBackgroundColor] = useState("");

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
      <View style={styles.colorContainer}>
        <TouchableOpacity
          style={[styles.button1, { backgroundColor: "#68c481" }]}
          onPress={() => setBackgroundColor("#68c481")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.button2, { backgroundColor: "#ad92de" }]}
          onPress={() => setBackgroundColor("#ad92de")}
        ></TouchableOpacity>
        <TouchableOpacity
          style={[styles.button3, { backgroundColor: "#7b9fe0" }]}
          onPress={() => setBackgroundColor("#7b9fe0")}
        ></TouchableOpacity>
      </View>
      <Button
        title="Go to Chat"
        onPress={() =>
          navigation.navigate(
            "Chat",
            { name: name },
            { backgroundColor: backgroundColor }
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },

  button1: {
    alignItems: "center",
    backgroundColor: "#68c481",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "#FF0000",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#7b9fe0",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  colorContainer: {
    flexDirection: "row",
  },
});

export default Start;
