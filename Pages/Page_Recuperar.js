import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const bgImageP = require("../Images/bgPages.png");
const iconLog = require("../Images/IconLogin.png");
export default function Page_Recuperar() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bgImageP} style={styles.bgStyle}>
      {/* Contenedor general */}
      <View style={styles.container}>
        <View style={styles.conTittle}>
          <Text style={styles.tittle}>Climate Green</Text>
        </View>
        {/* Contenedor del formulario */}
        <View style={styles.conBody}>
          {/* Cuerpo del formulario */}
          <View style={styles.bodyForm}>
            {/* Contenedor flecha volver */}
            <View style={styles.viewReturn}>
              <TouchableOpacity style={styles.btnReturn}>
                <Feather
                  name="arrow-left"
                  size={50}
                  color="#164A41"
                  onPress={() => navigation.navigate("Login")}
                />
              </TouchableOpacity>
            </View>
            {/* Contenedor flecha volver */}

            {/* Contenedor titulo */}
            <View style={styles.viewTitleBody}>
              <Text style={styles.tittleBody}>Recuperar Contraseña</Text>
            </View>
            {/* Contenedor titulo */}

            {/* seccion inputs del formulario */}
            <View style={styles.viewInputs}>
              <Text style={styles.txtRecuperar}>
                Ingrese el correo registrado para recibir un códiogo de
                restablecimiento
              </Text>

              <TouchableOpacity style={styles.inputCorreo}>
                <TextInput
                  placeholder="ejemplo@dominio.com"
                  placeholderTextColor={"rgba(0,255,117,0.4)"}
                  style={styles.txtInput}
                ></TextInput>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Recuperar_1")}
                style={styles.btnContinuar}
              >
                <Text style={styles.txtBtn}>CONTINUAR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewBtnInputs}>
              <Text style={styles.txtCuenta}>¿Tienes una cuenta?.</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.linkInicio}>Iniciar Sesión</Text>
              </TouchableOpacity>
            </View>
            {/*Fin seccion inputsdel formulario */}
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

  bodyForm: {
    width: "85%",
    height: "90%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  viewReturn: {
    display: "flex",
    width: "100%",
    height: 45,
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
    height: 75,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },

  tittleBody: {
    height: "100%",
    top: -10,
    fontSize: 25,
    fontFamily: "HoltwoodOneSC_400Regular",
    color: "#164A41",
  },

  viewInputs: {
    width: "95%",
    height: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 50,
  },

  txtRecuperar: {
    width: "100%",
    fontFamily: "Anaheim_400Regular",
    fontSize: 19,
    color: "#164A41",
    textAlign: "center",
  },
  inputCorreo: {
    width: "85%",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#164A41",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  txtInput: {
    width: "90%",
    fontFamily: "Anaheim_400Regular",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    textDecorationLine: "none",
  },

  btnContinuar: {
    width: "60%",
    height: 55,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "#164A41",
  },

  txtBtn: {
    paddingTop: 7,
    fontFamily: "RedRose_300Light",
    fontSize: 25,
    color: "#fff",
  },

  viewBtnInputs: {
    width: "100%",
    height: "14%",
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Anaheim_400Regular",
    fontSize: 20,
  },
  txtCuenta: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 18,
    color: "black",
    textAlign: "center",
  },

  linkInicio: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 18,
    color: "#088365",
    textDecorationLine: "underline",
    fontWeight: "bold",
    textAlign: "center",
  },
});
