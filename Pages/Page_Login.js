import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Switch,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const bgImageP = require("../Images/bgPages.png");
const iconLog = require("../Images/IconLogin.png");
export default function Page_Login() {
  const navigation = useNavigation();

  const [recordar, setRecordar] = useState(false);
  const toggleSwitch = () => setRecordar((previousState) => !previousState);

  return (
    <ImageBackground source={bgImageP} style={styles.bgStyle}>
      {/* Contenedor general */}
      <View style={styles.container}>
        <View style={styles.conTittle}>
          <Text style={styles.tittle}>Climate Green</Text>
        </View>
        {/* Contenedor del formulario */}
        <View style={styles.conBody}>
          <View style={styles.viewIcLogin}>
            <Image source={iconLog} style={styles.icImage} />
          </View>
          {/* Cuerpo del formulario */}
          <View style={styles.bodyForm}>
            {/* Contenedor flecha volver */}
            <View style={styles.viewReturn}>
              <TouchableOpacity style={styles.btnReturn}>
                <Feather
                  name="arrow-left"
                  size={50}
                  color="#164A41"
                  onPress={() => navigation.navigate("Inicio")}
                />
              </TouchableOpacity>
            </View>
            {/* Contenedor flecha volver */}

            {/* Contenedor titulo */}
            <View style={styles.viewTitleBody}>
              <Text style={styles.tittleBody}>Mi Cuenta</Text>
            </View>
            {/* Contenedor titulo */}

            {/* seccion inputs del formulario */}
            <View style={styles.viewInputs}>
              <View style={styles.viewInpt}>
                <FontAwesome6
                  name="user-large"
                  size={40}
                  color="#4D774E"
                  style={styles.iconInput}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="Usuario"
                  placeholderTextColor="#4D774E"
                  autoCapitalize="none"
                ></TextInput>
              </View>
              <View style={styles.viewtxtInp}>
                <Text style={styles.links}>Recordar Usuario</Text>
                <Switch
                  trackColor={{ false: "#4D774E", true: "#4D774E" }}
                  thumbColor={recordar ? "#00FF75" : "#808080"}
                  onValueChange={toggleSwitch}
                  value={recordar}
                  style={styles.swicth}
                />
              </View>

              <View style={styles.viewInpt}>
                <Fontisto
                  name="locked"
                  size={40}
                  color="#4D774E"
                  style={styles.iconInput}
                />
                <TextInput
                  style={styles.inputs}
                  placeholder="Contraseña"
                  placeholderTextColor="#4D774E"
                  autoCapitalize="none"
                ></TextInput>
              </View>
              <View style={styles.viewtxtInp}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Recuperar")}
                >
                  <Text style={styles.links2}>Recuperar contraseña</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/*Fin seccion inputsdel formulario */}

            {/* View btn inputs */}
            <View style={styles.viewBtnInputs}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={styles.btnInputs}
              >
                <Text style={styles.textBtnInputs}>INGRESAR</Text>
              </TouchableOpacity>
            </View>
            {/*Fin View btn inputs */}
          </View>
          {/*Fin Cuerpo del formulario */}
        </View>
        {/*Fin contenedor del formulario */}
      </View>
      {/* Contenedor general */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  bgStyle: {
    width: "100%",
    height: "100%",
    flex: 1,
    position: "relative",
  },

  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  conTittle: {
    width: "100%",
    height: "25%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tittle: {
    fontSize: 70,
    fontFamily: "Michroma_400Regular",
    color: "#fff",
    textAlign: "center",
  },

  conBody: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "75%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 40,
  },

  viewIcLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 150,
    height: 150,
    zIndex: 1,
    backgroundColor: "#9DC88D",
    borderRadius: 100,
    top: 20,
  },

  icImage: {
    width: "90%",
    height: "90%",
  },

  bodyForm: {
    width: "85%",
    height: "85%",
    backgroundColor: "#fff",
  },
  viewReturn: {
    display: "flex",
    width: "100%",
    height: "15%",
  },

  btnReturn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15%",
    height: "100%",
  },

  viewTitleBody: {
    width: "100%",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  tittleBody: {
    fontSize: 25,
    fontFamily: "HoltwoodOneSC_400Regular",
    color: "#164A41",
  },

  viewInputs: {
    width: "100%",
    height: "55%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    rowGap: 10,
  },

  viewInpt: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  iconInput: {
    position: "absolute",
    left: 35,
  },

  inputs: {
    width: "90%",
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderColor: "black",
    fontFamily: "Anaheim_400Regular",
    fontSize: 30,
    paddingLeft: 80,
  },

  viewtxtInp: {
    width: "100%",
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 15,
  },

  links: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 20,
    color: "#4D774E",
  },

  swicth: {
    height: "80%",
    marginLeft: 20,
  },

  links2: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 20,
    color: "#01BC57",
    textDecorationLine: "underline",
  },

  viewBtnInputs: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnInputs: {
    width: "70%",
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#164A41",
  },

  textBtnInputs: {
    height: "90%",
    display: "flex",
    fontSize: 30,
    fontFamily: "RedRose_400Regular",
    paddingTop: 3,
    color: "#fff",
  },
});
