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

export default function Page_Info() {
  const navigation = useNavigation();
  const tittle = "SOBRE LA APP";
  return (
    <View style={styles.container}>
      <HeaderC {...{ text: tittle }} />
      <View style={styles.containerBody}>
        <Text style={styles.txtInfo}>
          Esta aplicación se crea en colaboración con la Organización mundial de
          las naciones unidas (ONU)
        </Text>

        <Text style={styles.txtInfo}>
          La Asamblea General de la ONU adoptó hoy la Agenda 2030 para el
          Desarrollo Sostenible, un plan de acción a favor de las personas, el
          planeta y la prosperidad, que también tiene la intención de fortalecer
          la paz universal y el acceso a la justicia.
        </Text>

        <Text style={styles.txtInfo3}>Enfocada en el objetivo #13</Text>

        <Text style={styles.txtObject}>Acción por el clima</Text>
        <Text style={styles.txtVersion}>v.1.0.1.2</Text>
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
    rowGap: 10,
    top: "-7%",
  },

  txtInfo: {
    width: "60%",
    fontSize: 18,
    fontFamily: "Michroma_400Regular",
    color: "#fff",
    textAlign: "center",
  },
  txtInfo3: {
    width: "35%",
    fontSize: 18,
    fontFamily: "Michroma_400Regular",
    color: "#fff",
    textAlign: "center",
  },
  txtObject: {
    width: "70%",
    fontSize: 18,
    fontFamily: "HoltwoodOneSC_400Regular",
    color: "#fff",
    textAlign: "center",
  },

  txtVersion: {
    width: "70%",
    fontSize: 18,
    fontFamily: "Anaheim_400Regular",
    color: "#fff",
    textAlign: "center",
    letterSpacing: 3,
  },
});
