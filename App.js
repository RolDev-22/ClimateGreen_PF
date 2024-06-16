import Navigation from "./Navigation/Navigation";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import { Anaheim_400Regular } from "@expo-google-fonts/anaheim";
import { HoltwoodOneSC_400Regular } from "@expo-google-fonts/holtwood-one-sc";
import {
  RedRose_400Regular,
  RedRose_300Light,
} from "@expo-google-fonts/red-rose";
import { Michroma_400Regular } from "@expo-google-fonts/michroma";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Anaheim_400Regular,
    HoltwoodOneSC_400Regular,
    RedRose_400Regular,
    RedRose_300Light,
    Michroma_400Regular,
  });
  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
