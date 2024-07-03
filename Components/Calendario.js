import React, { useState, useEffect } from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  getFirestore,
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import app from "../Config_Firebase/firebaseConfig";

const db = getFirestore(app);

LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom.", "Lun.", "Mar.", "Mié.", "Jue.", "Vie.", "Sáb."],
  today: "Hoy",
};
LocaleConfig.defaultLocale = "es";

const imageNotfound = require("../Images/sinresults.png");

export default function Calendario() {
  const [selected, setSelected] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [liked, setLiked] = useState({});

  useEffect(() => {
    const getNoticias = async (fecha) => {
      try {
        console.log(`Fetching documents for date: ${fecha}`);
        const docRef = doc(db, "Dias", fecha);
        const noticiasCollectionRef = collection(docRef, "Noticias");
        const noticiasSnapshot = await getDocs(noticiasCollectionRef);
        const noticiasList = noticiasSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNoticias(noticiasList);

        // Obtener la lista de likes para actualizar el estado 'liked'
        const likesSnapshot = await getDocs(collection(db, "NoticiaLike"));
        const likesList = likesSnapshot.docs.reduce((acc, doc) => {
          acc[doc.data().id] = doc.id;
          return acc;
        }, {});
        setLiked(likesList);
      } catch (error) {
        console.log("Error fetching documents: ", error);
        setNoticias([]);
      }
    };

    if (selected) {
      getNoticias(selected);
    }
  }, [selected]);

  const toggleLike = async (noticia) => {
    const { id } = noticia;
    const likedId = liked[id];

    if (likedId) {
      // Eliminar evento de la colección 'NoticiaLike'
      const docRef = doc(db, "NoticiaLike", likedId);
      await deleteDoc(docRef)
        .then(() => {
          console.log("Document successfully deleted!");
          setLiked((prevLiked) => {
            const updatedLiked = { ...prevLiked };
            delete updatedLiked[id];
            return updatedLiked;
          });
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    } else {
      // Añadir evento a la colección 'NoticiaLike'
      await addDoc(collection(db, "NoticiaLike"), noticia)
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setLiked((prevLiked) => ({
            ...prevLiked,
            [id]: docRef.id,
          }));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerCalendario}>
        <Calendar
          onDayPress={(day) => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {
              selected: true,
            },
          }}
          theme={{
            arrowStyle: styles.arrowStyle,
            calendarBackground: "#088365",
            textSectionTitleColor: "white",
            selectedDayBackgroundColor: "#00C853",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00C853",
            dayTextColor: "white",
            textDisabledColor: "gray",
            monthTextColor: "white",
            textDayFontWeight: "100",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "500",
            textDayFontSize: 20,
            textMonthFontSize: 30,
            textDayHeaderFontSize: 10,
          }}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#9DC88D",
            borderRadius: 10,
          }}
          renderArrow={(direction) => (
            <View
              style={
                direction === "left" ? styles.leftArrow : styles.rightArrow
              }
            >
              <Text style={styles.arrowStyle}>
                {direction === "left" ? (
                  <FontAwesome name="chevron-left" size={50} color="#088365" />
                ) : (
                  <FontAwesome name="chevron-right" size={50} color="#088365" />
                )}
              </Text>
            </View>
          )}
        />
      </View>
      <View style={styles.containerEvents}>
        <ScrollView contentContainerStyle={styles.ScrollContainerCal}>
          {noticias.length > 0 ? (
            noticias.map((noticia) => (
              <View key={noticia.id} style={styles.eventItem}>
                <View style={styles.textEvetn}>
                  <View style={styles.eventTitleCont}>
                    <Text style={styles.eventTitle}>{noticia.Titulo}</Text>
                  </View>
                  <View style={styles.eventLocationCont}>
                    <Text style={styles.eventLocation}>
                      {noticia.Ubicacion}
                    </Text>
                  </View>
                  <View style={styles.eventDescriptionCont}>
                    <Text style={styles.eventDescription} numberOfLines={5}>
                      {noticia.Descripcion}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.likeEvent}
                  onPress={() => toggleLike(noticia)}
                >
                  {liked[noticia.id] ? (
                    <AntDesign name="heart" size={40} color="red" />
                  ) : (
                    <AntDesign name="hearto" size={40} color="white" />
                  )}
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <View style={styles.noEventsContainer}>
              <Text style={styles.noEventsText}>
                No hay eventos para esta fecha
              </Text>
              <Image style={styles.noEventsImage} source={imageNotfound} />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignContent: "center",
    width: "100%",
  },
  containerCalendario: {
    width: "100%",
    height: "42%",
    justifyContent: "center",
  },
  arrowStyle: {
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 15,
  },
  leftArrow: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  rightArrow: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  containerEvents: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  ScrollContainerCal: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  eventItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    marginBottom: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "green",
  },
  textEvetn: {
    width: "80%",
  },
  likeEvent: {
    width: "20%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  eventTitleCont: {
    width: "100%",
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  eventDescriptionCont: {
    width: "100%",
  },
  eventDescription: {
    fontSize: 14,
    color: "white",
  },
  eventLocationCont: {
    width: "100%",
  },
  eventLocation: {
    fontSize: 14,
    color: "white",
  },
  noEventsContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  noEventsText: {
    fontSize: 20,
    color: "gray",
  },
  noEventsImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
