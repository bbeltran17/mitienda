import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect, useReducer} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwitchNavigator from './src/Navegacion/SwitchNavigator';
import RutasNoAutenticadas from './src/Navegacion/RutasNoAutenticadas';
import {validarSession} from "./src/Utils/Acciones";
import Loading from "./src/Componentes/Loading";

export default function App() {
  const [user,setuser] = useState(false);
  const [loading,setloading] = useState(false);
  useEffect(()=>{
    setloading(true);
    validarSession(setuser);
    setloading(false);
  },[]);
  if (loading){
    return <Loading isVisible={loading} text="cargando..."/>;
  }

  return user ? <SwitchNavigator/> : <RutasNoAutenticadas/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
