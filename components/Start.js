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
  const [button1Color, setButton1Color] = useState("#68c481");
  const [button2Color, setButton2Color] = useState("#ad92de");
  const [button3Color, setButton3Color] = useState("#7b9fe0");

  const onPressButton1 = () => {
    setButton1Color("#68c481"); // Change this to the desired color for Button 1
  };

  const onPressButton2 = () => {
    setButton2Color("#ad92de"); // Change this to the desired color for Button 2
  };

  const onPressButton3 = () => {
    setButton3Color("#7b9fe0"); // Change this to the desired color for Button 3
  };

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
      <TouchableOpacity
        style={[styles.button1, { backgroundColor: button1Color }]}
        onPress={onPressButton1}
      ></TouchableOpacity>
      <TouchableOpacity
        style={[styles.button2, { backgroundColor: button2Color }]}
        onPress={onPressButton2}
      ></TouchableOpacity>
      <TouchableOpacity
        style={[styles.button3, { backgroundColor: button3Color }]}
        onPress={onPressButton3}
      ></TouchableOpacity>
      <Button
        title="Go to Chat"
        onPress={() =>
          navigation.navigate(
            "Chat",
            { name: name },
            { button1Color: button1Color },
            { button2Color: button2Color },
            { button3Color: button3Color }
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

  button1: {
    alignItems: "center",
    backgroundColor: "#68c481",
    width: 50 / 2,
    brorderRadius: 50,
  },
  button2: {
    alignItems: "center",
    backgroundColor: "##FF0000",
    width: 50 / 2,
    brorderRadius: 50,
  },
  button3: {
    alignItems: "center",
    backgroundColor: "#7b9fe0",
    width: 50 / 2,
    brorderRadius: 50,
  },
});

export default Start;
