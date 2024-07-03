import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import HeaderC from "../../Components/HeaderC";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import app from "../../Config_Firebase/firebaseConfig";

const db = getFirestore(app);

export default function Page_Principal() {
  const navigation = useNavigation();
  const tittle = "Home";

  const [noticia, setNoticia] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  useEffect(() => {
    const getNoticias = async () => {
      try {
        const qyCollection = await getDocs(collection(db, "Noticias"));
        const noticias = [];
        qyCollection.forEach((doc) => {
          const { titulo, descripcion, image } = doc.data();
          noticias.push({
            id: doc.id,
            titulo,
            descripcion,
            image,
          });
        });
        setNoticia(noticias);
      } catch (error) {
        console.log(error);
      }
    };

    getNoticias();
  }, []);

  const handlePressVerMas = (noticia) => {
    setSelectedNoticia(noticia);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <HeaderC {...{ text: tittle }} />
      <View style={styles.containerBody}>
        <ScrollView contentContainerStyle={styles.containerScroll}>
          {noticia.map((item) => (
            <View style={styles.boxCards} key={item.id}>
              <View style={styles.imgCards}>
                <Image style={styles.imageCards} source={{ uri: item.image }} />
              </View>
              <View style={styles.textCards}>
                <Text style={styles.tittleCards}>{item.titulo}</Text>
                <Text style={styles.descriptionCards} numberOfLines={5}>
                  {item.descripcion}
                </Text>
                <TouchableOpacity
                  style={styles.verMasCards}
                  onPress={() => handlePressVerMas(item)}
                >
                  <Text style={styles.verMasText}>Ver mas...</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>

      {selectedNoticia && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{selectedNoticia.titulo}</Text>

                <Pressable
                  style={[styles.button]}
                  onPress={() => setModalVisible(false)}
                >
                  <Fontisto name="close-a" size={40} color="#164A41" />
                </Pressable>
              </View>

              <Image
                source={{ uri: selectedNoticia.image }}
                style={styles.modalImage}
              />
              <Text style={styles.modalDescription}>
                {selectedNoticia.descripcion}
              </Text>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#9DC88D",
  },

  containerScroll: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  containerBody: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  boxCards: {
    width: "95%",
    height: 200,
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#088365",
    marginBottom: 10,
  },
  imgCards: {
    width: "35%",
    height: "75%",
    resizeMode: "cover",
  },

  imageCards: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  textCards: {
    width: "55%",
    height: "95%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  tittleCards: {
    fontSize: 25,
    fontFamily: "Anaheim_400Regular",
    color: "white",
    textAlign: "center",
  },

  descriptionCards: {
    fontSize: 20,
    fontFamily: "Anaheim_400Regular",
    color: "white",
    textAlign: "justify",
  },

  verMasText: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 25,
    color: "#00FF75",
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 70,
  },
  modalView: {
    height: "88%",
    width: "95%",
    backgroundColor: "rgba(166,205,152,0.9)",
    borderRadius: 20,
    padding: 35,
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
    fontFamily: "Anaheim_400Regular",
    fontSize: 60,
    marginBottom: 15,
    left: 45,
    color: "white",
  },
  modalImage: {
    width: 364,
    height: 262,
    resizeMode: "cover",
    marginBottom: 15,
  },
  modalDescription: {
    fontFamily: "Anaheim_400Regular",
    fontSize: 25,
    textAlign: "justify",
    marginBottom: 15,
    color: "#164A41",
  },
  button: {
    top: -45,
    right: -30,
    borderRadius: 20,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  modalHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
