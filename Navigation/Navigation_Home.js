import React, { useState } from "react";
import { Header } from "react-native";
import "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import Page_Principal from "../Pages/Pages_Inside/Page_Principal";
import Page_Calendario from "../Pages/Pages_Inside/Page_Calendario";
import Page_Info from "../Pages/Pages_Inside/Page_Info";
import Page_Guardados from "../Pages/Pages_Inside/Page_Guardados";
import HeaderC from "../Components/HeaderC";

const TabNav = createBottomTabNavigator();

function TabsHome() {
  return (
    <TabNav.Navigator
      initialRouteName="Page_Principal"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "blue",
        tabBarStyle: {
          backgroundColor: "#4D774E",
          height: 75,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 7,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          switch (route.name) {
            case "Page_Principal":
              iconName = "home";
              IconComponent = Feather;
              break;
            case "Page_Calendario":
              iconName = "calendar-sharp";
              IconComponent = Ionicons;
              break;
            case "Page_Guardados":
              iconName = "bookmark-o";
              IconComponent = FontAwesome;
              break;
            case "Page_Info":
              iconName = "info";
              IconComponent = MaterialIcons;
              break;
            default:
              iconName = "circle";
              IconComponent = Feather;
          }

          return (
            <View
              style={[
                styles.iconContainer,
                focused && styles.activeIconContainer,
              ]}
            >
              <IconComponent
                name={iconName}
                size={45}
                color={focused ? "#00FF75" : "white"}
              />
            </View>
          );
        },
        tabBarLabel: () => null,
        headerShown: false,
      })}
    >
      <TabNav.Screen name="Page_Principal" component={Page_Principal} />
      <TabNav.Screen name="Page_Calendario" component={Page_Calendario} />
      <TabNav.Screen name="Page_Guardados" component={Page_Guardados} />
      <TabNav.Screen name="Page_Info" component={Page_Info} />
    </TabNav.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
  activeIconContainer: {
    backgroundColor: "#164A41",
  },
});

export default function Navigation_Home() {
  return <TabsHome />;
}
