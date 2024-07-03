import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderC from "../../Components/HeaderC";

export default function Editar_Perfil() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [correo, setCorreo] = useState("");
  const navigation = useNavigation();

  //función para volver atras al guardar los cambios del perfil
  const handleSave = () => {
    Alert.alert("Perfil guardado", "Los cambios han sido guardados.");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderC text="Editar Perfil" />
      <View style={styles.formContainer}>
        <Text style={styles.txt}>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.txt}>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={apellido}
          onChangeText={setApellido}
        />
        <Text style={styles.txt}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Guardar Cambios</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9DC88D",
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  txt: {
    fontSize: 18,
    color: "#164A41",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "#4D774E",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4D774E",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
