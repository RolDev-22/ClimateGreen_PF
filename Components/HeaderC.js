import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const imgLogo = require("../Images/logo.png");

export default function HeaderC(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.ContainerHeader}>
      <View style={styles.logo}>
        <Image source={imgLogo} style={styles.imLogo} />
      </View>
      <Text style={styles.txtTittle}>{props.text}</Text>
      <View style={styles.btnUser}>
        <TouchableOpacity
          style={styles.User}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome name="user" size={45} color="#164A41" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Menu</Text>
            <Pressable
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>X</Text>
            </Pressable>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate("Editar_Perfil");
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>EDITAR PERFIL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                navigation.navigate("Inicio");
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>SALIR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "#4D774E",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  modalClose: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalCloseText: {
    fontSize: 18,
    color: "white",
  },
  modalButton: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#00C853",
    alignItems: "center",
    marginVertical: 5,
  },
  modalButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
