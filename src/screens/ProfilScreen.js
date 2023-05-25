import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  initProfileName,
  getProfileName,
} from "../shared/functions/AsyncFunction";

//Appelez la fonction initProfileName() pour initialiser le nom enregistré au chargement du composant.
const ProfileScreen = () => {
  const [connectedUser, setConnectedUser] = useState("Invité");
  //Appelez la fonction initProfileName() pour initialiser le nom enregistré au chargement du composant.
  useEffect(() => {
    initProfileName();
  }, []);
  //Créez la méthode loadProfile() qui utilisera notre fonction getProfileName() et qui gèrera le callback renvoyé par cette fonction.
  const loadProfile = () => {
    getProfileName().then((newUser) => {
      setConnectedUser(newUser);
    });
  };
  //Le composant ProfileScreen devra retourner une vue, qui contiendra un Text affichant le message “Bonjour, ” suivi du nom stocké dans connectedUser.
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Bonjour, {connectedUser}</Text>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={loadProfile}
        style={styles.buttonStyle}
      >
        <Text style={styles.buttonText}>Charger le profil de test</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 24,
    borderWidth: 1,
    padding: 32,
  },

  hello: {
    textAlign: "center",
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: "#333",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 24,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default ProfileScreen;
