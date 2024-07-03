import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Page_Inicio from "../Pages/Page_Inicio";
import Page_Login from "../Pages/Page_Login";
import Page_Registro from "../Pages/Page_Registro";
import Page_Recuperar from "../Pages/Page_Recuperar";
import Page_Recuperar_1 from "../Pages/Page_Recuperar_1";
import Page_Recuperar_2 from "../Pages/Page_Recuperar_2";
import Page_Home from "../Pages/Page_Home";
import Editar_Perfil from "../Pages/Pages_Inside/Editar_Perfil";

const MyStack = createNativeStackNavigator();

const MyStacks = () => {
  return (
    <MyStack.Navigator
      initialRouteName="Page_Inicio"
      screenOptions={{ headerShown: false }}
    >
      <MyStack.Screen name="Inicio" component={Page_Inicio} />
      <MyStack.Screen name="Login" component={Page_Login} />
      <MyStack.Screen name="Registro" component={Page_Registro} />
      <MyStack.Screen name="Recuperar" component={Page_Recuperar} />
      <MyStack.Screen name="Recuperar_1" component={Page_Recuperar_1} />
      <MyStack.Screen name="Recuperar_2" component={Page_Recuperar_2} />
      <MyStack.Screen name="Home" component={Page_Home} />
      <MyStack.Screen name="Editar_Perfil" component={Editar_Perfil} />
    </MyStack.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
  );
}
