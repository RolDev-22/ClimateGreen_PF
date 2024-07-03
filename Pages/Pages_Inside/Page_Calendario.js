import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

import HeaderC from "../../Components/HeaderC";
import Calendario from "../../Components/Calendario";

export default function Page_Calendario() {
  const tittle = "Calendario";
  return (
    <View style={styles.container}>
      <HeaderC {...{ text: tittle }} />
      <View style={styles.containerBody}>
        <Calendario />
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
