import { Dimensions } from "react-native";

//Les deux fonction créer permettent de connaître la taille de l'écran utilisé
export function getWidth() {
  const windowWidth = Dimensions.get("window").width;
  return windowWidth;
}

export function getHeight() {
  const windowHeight = Dimensions.get("window").height;
  return windowHeight;
}
