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
import { getAuth, signInAnonymously } from "firebase/auth";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const auth = getAuth();

  const [backgroundColor, setBackgroundColor] = useState("");

  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          userID: result.user.uid,
          name: name,
          backgroundColor: backgroundColor,
        });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.welcomeBox}>
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
            style={[styles.startButton, { backgroundColor: "black" }]}
            title="Start Chatting"
            onPress={signInUser}
          />
        </View>
      </ImageBackground>
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
  welcomeBox: {
    backgroundColor: "#FFFFFF88",
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
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
    backgroundColor: "#68c481",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  button2: {
    backgroundColor: "#FF0000",
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  button3: {
    backgroundColor: "#7b9fe0",
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  colorContainer: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
});

export default Start;
