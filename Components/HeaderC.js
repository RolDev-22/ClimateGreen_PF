import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

const imgLogo = require("../Images/logo.png");
export default function HeaderC(props) {
  return (
    <View style={styles.ContainerHeader}>
      <View style={styles.logo}>
        <Image source={imgLogo} style={styles.imLogo} />
      </View>
      <Text style={styles.txtTittle}>{props.text}</Text>
      <View style={styles.btnUser}>
        <TouchableOpacity style={styles.User}>
          <FontAwesome name="user" size={45} color="#164A41" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerHeader: {
    height: 110,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#4D774E",
  },

  logo: {
    width: "30%",
    height: 70,
  },
  imLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  txtTittle: {
    width: "50%",
    height: 70,
    display: "flex",
    textAlign: "center",
    paddingTop: 30,
    fontFamily: "HoltwoodOneSC_400Regular",
    fontSize: 25,
    color: "white",
  },
  btnUser: {
    width: "20%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  User: {
    width: 55,
    height: 55,
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
