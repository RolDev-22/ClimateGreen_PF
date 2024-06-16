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

export default function Page_Calendario() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HOLA DESDE Calendario</Text>
      <TouchableHighlight>
        <Text onPress={() => navigation.navigate("Inicio")}>
          Volver a Inicio
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
