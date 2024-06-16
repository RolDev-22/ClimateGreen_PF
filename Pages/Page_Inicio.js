import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const bgImage = require("../Images/bgHome.jpg");
const imgLogo = require("../Images/logo.png");
const imgIcon = require("../Images/imageIni.png");
export default function Page_Inicio() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImage} style={styles.bgStyle}>
      {/* Contenedor principal */}
      <View style={styles.container}>
        {/* Contenedor para el body */}
        <View style={styles.bodyContainer}>
          <Text style={styles.tittleBody}>ClimateGreen</Text>
          <Image source={imgLogo}></Image>
        </View>

        {/* Contenedor para el svg */}
        <View style={styles.bodysvg}>
          <View style={styles.viewTxtHome}>
            <View style={styles.viewtextHome}>
              <Text style={styles.txtHome}>Qué deseas realizar?</Text>
            </View>

            <View style={styles.viewicHome}>
              <Image style={styles.imageIcon} source={imgIcon}></Image>
            </View>
          </View>
          <Svg
            height="100%"
            width="100%"
            viewBox="10 0 9 10"
            style={styles.svg}
          >
            <Path d="M20 0 L0 11 L20 11 Z" fill="#4D774E" />
          </Svg>

          <View style={styles.viewBtnHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={styles.btnHome}
            >
              <Text style={styles.txtBtn}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Registro")}
              style={styles.btnHome}
            >
              <Text style={styles.txtBtn}>Registrar</Text>
            </TouchableOpacity>
            <Text style={styles.txtV}>V.1.0.1.2</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgStyle: {
    width: "100%",
    height: "80%",
    flex: 1,
    position: "relative",
  },

  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  bodyContainer: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  tittleBody: {
    fontFamily: "Michroma_400Regular",
    fontSize: 40,
    fontWeight: "bold",
    color: "#00FF75",
    marginBottom: 30,
  },
  viewTxtHome: {
    width: "100%",
    height: 250,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    top: -85,
    zIndex: 1,
    // backgroundColor: "green",
  },

  viewtextHome: {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },

  txtHome: {
    position: "relative",
    width: "90%",
    fontSize: 50,
    color: "#00FF75",
    textAlign: "center",
    fontFamily: "Michroma_400Regular",
  },

  viewicHome: {
    display: "flex",
    alignItems: "center",
    width: "15%",
    // backgroundColor: "blue",
  },

  imageIcon: {
    width: 220,
    height: 220,
    top: -45,
    left: -10,
  },

  bodysvg: {
    width: "100%",
    height: "50%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    position: "relative",
  },

  svg: {
    zIndex: 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  viewBtnHome: {
    width: "100%",
    height: 260,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "absolute",
    rowGap: 20,
    bottom: 10,
    zIndex: 1,
    // backgroundColor: "blue",
  },

  btnHome: {
    width: "80%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#088365",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
  },

  txtBtn: {
    fontSize: 30,
    color: "#fff",
    fontFamily: "HoltwoodOneSC_400Regular",
  },

  txtV: {
    fontSize: 15,
    color: "#fff",
    textDecoration: "underline",
  },
});
