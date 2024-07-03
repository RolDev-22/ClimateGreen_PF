import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import app from "../../Config_Firebase/firebaseConfig";
import HeaderC from "../../Components/HeaderC";

const db = getFirestore(app);

export default function Page_Guardados() {
  const [noticiasLike, setNoticiasLike] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const tittle = "Mis Eventos";

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "NoticiaLike"),
      (snapshot) => {
        const noticias = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNoticiasLike(noticias);
        setLoading(false);
        console.log("Noticias obtenidas:", noticias);
      },
      (error) => {
        console.error("error al obtener las noticias: ", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderC {...{ text: tittle }} />
      <View style={styles.containerBody}>
        <Text style={styles.title}>Eventos guardados</Text>
        <View style={styles.contetntScroll}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {noticiasLike.length > 0 ? (
              noticiasLike.map((noticia) => (
                <View key={noticia.id} style={styles.card}>
                  <Text style={styles.cardTitle}>{noticia.Titulo}</Text>
                  <Text style={styles.cardLocation}>{noticia.Ubicacion}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noEventsText}>No hay eventos guardados</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#9DC88D",
  },
  containerBody: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: "black",
    width: "100%",
    textAlign: "center",
  },

  contetntScroll: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    paddingVertical: 20,
    height: "50%",
  },

  scrollContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    flexGrow: 1,
  },
  card: {
    width: "90%",
    backgroundColor: "#d3f2d8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  cardLocation: {
    fontSize: 16,
    color: "#555",
  },
  noEventsText: {
    fontSize: 20,
    color: "gray",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
});
