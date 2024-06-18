import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderC from "../../Components/HeaderC";

export default function Page_Calendario() {
  const navigation = useNavigation();
  const tittle = "Calendario";
  return (
    <View style={styles.container}>
      <HeaderC {...{ text: tittle }} />
      <View style={styles.containerBody}>
        <Text>HOLA DESDE CALENDARIO</Text>
        <TouchableHighlight>
          <Text onPress={() => navigation.navigate("Inicio")}>
            Volver a Inicio
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#9DC88D",
  },
  containerBody: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
