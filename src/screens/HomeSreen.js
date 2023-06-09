import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import colors from "../shared/theme/colors";
import { getWidth, getHeight } from "../shared/constant/ScreenSize";
import { setUsername, getUsername } from "../shared/functions/AsyncFunctions";
import { RoundIconBtn, ReplacementView } from "../components";

const screenWidth = getWidth();
const screenHeight = getHeight();
const debug = false;

const HomeScreen = ({
  userName,
  modifyGlobalUsername,
  setNavUserName,
  navigation,
}) => {
  const [name, setName] = useState("");
  const initUsername = async () => {
    getUsername().then((newUser) => {
      if (newUser !== null) {
        setName(JSON.parse(newUser).name);
      }
    });
  };

  useEffect(() => {
    if (name === "") {
      initUsername();
    }
    if (userName !== "" && name !== userName) {
      setName(userName);
    }
  }, []);

  const handleSubmit = async () => {
    const user = { name: name };
    await setUsername(JSON.stringify(user));
    setNavUerName(name);
    modifyGlobalUsername(name);
    navigation.navigate("NoteList");
  };

  //méthode trim pour supprimer les espaces
  const handleTextChange = (text) => {
    setName(text.trim());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>
        Entrer le prénom qui sera associé aux notes
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Exemple: Jean"
        value={name}
        onChangeText={handleTextChange}
      />
      {debug ? <Text style={styles.userText}> [{name}] </Text> : null}
      {name?.trim()?.length > 0 ? (
        <RoundIconBtn
          iconName="arrow-right"
          iconType="foundation"
          color={colors.WHITE}
          size={24}
          onPress={handleSubmit}
          style={{ borderRadius: 12, padding: 16 }}
        />
      ) : (
        <ReplacementView width="100%" padding={40} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ULTRALIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
  inputTitle: {
    alignSelf: "flex-start",
    textAlign: "center",
    paddingLeft: 24,
    marginTop: 3,
    marginBottom: 3,
    opacity: 0.5,
  },
  textInput: {
    width: screenWidth - 50,
    height: 48,
    borderWidth: 1,
    borderColor: colors.DARK,
    borderRadius: 6,
    paddingLeft: 12,
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12,
    color: colors.PRIMARY,
  },
  userText: {
    textAlign: "center",
    color: colors.DARK,
    fontSize: 24,
  },
});

export default HomeScreen;
