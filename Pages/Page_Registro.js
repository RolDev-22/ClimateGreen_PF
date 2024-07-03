import React, { useState, useEffect } from "react";
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
import { Picker } from "@react-native-picker/picker";
import Checkbox from "expo-checkbox";

const bgImageP = require("../Images/bgPages.png");
const iconLog = require("../Images/regis.png");

export default function Page_Registro() {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState("Masc");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Función para obtener los países de la API
  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all"); // datos de la API
      const json = await response.json(); // Parseando la respuesta JSON
      const countryNames = json.map((country) => country.name.common); // nombres de los países
      setCountries(countryNames.sort()); // Ordenando de los paises y su estado
    } catch (error) {
      console.error("Error fetching countries: ", error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect para obtener los países cuando el componente se monta
  useEffect(() => {
    getCountries();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

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
              <Text style={styles.tittleBody}>Registrar</Text>
            </View>
            {/* Contenedor titulo */}

            {/* seccion inputs del formulario */}
            <View style={styles.viewInputs}>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#00FF75"
              />
              <TextInput
                style={styles.input}
                placeholder="Apellidos"
                placeholderTextColor="#00FF75"
              />
              <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                placeholderTextColor="#00FF75"
                keyboardType="email-address"
              />

              <View style={styles.viewGenero}>
                <Text style={styles.txtGenero}>Genero</Text>
                <TouchableOpacity
                  style={[
                    styles.btnGenero,
                    selectedGender === "Masc" && styles.selecGenBtn,
                  ]}
                  onPress={() => setSelectedGender("Masc")}
                >
                  <Text
                    style={[
                      styles.txtGeneroSelect,
                      selectedGender === "Masc" && styles.txtGeneroSelect,
                    ]}
                  >
                    Masc
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.btnGenero,
                    selectedGender === "Fem" && styles.selecGenBtn,
                  ]}
                  onPress={() => setSelectedGender("Fem")}
                >
                  <Text
                    style={[
                      styles.txtGeneroSelect,
                      selectedGender === "Fem" && styles.txtGeneroSelect,
                    ]}
                  >
                    Fem
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={styles.viewPais}>
                <Text style={styles.txtPais}>Pais</Text>

                <View style={styles.ViewPicker}>
                  <Picker
                    selectedValue={selectedCountry}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                  >
                    <Picker.Item label="Select Pais" value="" />
                    {countries.map((country) => (
                      <Picker.Item
                        key={country}
                        label={country}
                        value={country}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#00FF75"
                secureTextEntry={true}
              />
              <TextInput
                style={styles.input}
                placeholder="Confirme contraseña"
                placeholderTextColor="#00FF75"
                secureTextEntry={true}
              />

              <View style={styles.ViewTerminos}>
                <Checkbox
                  value={termsAccepted}
                  onValueChange={setTermsAccepted}
                  style={styles.checkbox}
                />
                <Text style={styles.termsText}>
                  Acepto términos y condiciones
                </Text>
              </View>
            </View>

            <View style={styles.viewBtnInputs}>
              <TouchableOpacity style={styles.btnInputs}>
                <Text style={styles.textBtnInputs}>REGISTRAR</Text>
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
    paddingBottom: 10,
  },

  viewIcLogin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 140,
    height: 140,
    zIndex: 1,
    backgroundColor: "#9DC88D",
    borderRadius: 100,
    top: -15,
  },

  icImage: {
    width: "105%",
    height: "105%",
  },

  bodyForm: {
    width: "85%",
    height: "92%",

    backgroundColor: "#fff",
  },
  viewReturn: {
    display: "flex",
    width: "100%",
    height: "10%",
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
    height: 45,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingTop: 10,
  },

  tittleBody: {
    fontSize: 25,
    fontFamily: "HoltwoodOneSC_400Regular",
    color: "#164A41",
    textAlign: "center",
  },

  viewInputs: {
    width: "100%",
    height: 420,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 15,
  },

  input: {
    width: "80%",
    height: 35,
    backgroundColor: "#164A41",
    color: "#a5d6a7",
    fontFamily: "Anaheim_400Regular",
    fontSize: 25,
    borderRadius: 10,
    paddingLeft: 20,
  },

  viewGenero: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 5,
  },
  txtGenero: {
    width: "35%",
    fontFamily: "Anaheim_400Regular",
    fontSize: 30,
    color: "#088365",
  },
  btnGenero: {
    width: 65,
    height: 35,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#164A41",
  },
  txtGeneroSelect: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 25,
    color: "#fff",
  },

  selecGenBtn: {
    backgroundColor: "#00FF75",
  },

  viewPais: {
    width: "80%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  txtPais: {
    width: "20%",
    fontFamily: "Anaheim_400Regular",
    fontSize: 30,
    color: "#088365",
  },

  ViewPicker: {
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 15,
    backgroundColor: "#164A41",
  },

  picker: {
    flex: 1,
    width: "100%",
    height: "100%",
    color: "#00FF75",
    fontFamily: "Anaheim_400Regular",
  },

  ViewTerminos: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  termsText: {
    color: "#088365",
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },

  viewBtnInputs: {
    width: "100%",
    height: 75,
    bottom: -5,
    display: "flex",
    justifyContent: "flex-start",
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
    paddingTop: 5,
    color: "#fff",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
