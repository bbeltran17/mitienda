import React,{useRef} from "react";
import {View, Text, StyleSheet, Image, StatusBar} from "react-native";
import RegisterForm from "../../Componentes/RegisterForm";
import Toast from "react-native-easy-toast";

export default function Registrar (){

    const toastRef = useRef();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#4d658e"></StatusBar>
            <Image 
                source = {require("../../../assets/logo.png")}
                style={styles.logo}
            >
            </Image>
            <Text style={styles.textoinicial}>Crear cuenta</Text>
            <RegisterForm toastRef={toastRef}/>
            <Toast ref ={toastRef} position="center" opacity={0.9}></Toast>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#4d658e",

    },
    logo:{
        width:150,
        height:150,
        marginTop:50,
        alignSelf:"center"
    },
    textoinicial:{
        fontSize:25,
        fontWeight:"bold",
        color:"#fff",
        alignSelf:"center"
    }
});