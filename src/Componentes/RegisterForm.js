import React,{useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Icon, Input, Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {validaremail} from "../Utils/Utils.js"
import {isEmpty,size} from "lodash";
import * as firebase from "firebase";
import Loading from "../Componentes/Loading";

export default function RegisterForm(props){
    const {toastRef} = props;
    const navigation = useNavigation();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [repetirpass, setrepetirpass] = useState("");
    const [show, setshow] = useState(false);
    const [loading, setloading] = useState(false);
    function crearcuenta(){
        if(isEmpty(email) || isEmpty(pass) || isEmpty(repetirpass)){
            toastRef.current.show("Todos los campos son obligatorios");
        }else if (!validaremail(email)){
            toastRef.current.show("Correo no es válido");
        }else if (pass !== repetirpass){
            toastRef.current.show("Las contraseñas tienen que ser iguales");
        }else if (size(pass)<6){
            toastRef.current.show("Las contraseñas deben tener al menos 6 caracteres");
        }else{
            setloading(true);
            // firebase
            // .auth()
            // .createUserWithEmailAndPassword(email,password)
            // .then((response)=>{
            //     toastRef.current.show("Se ha creado el usuario correctamente");
            //     setloading(false);
            // })
            // .catch((err)=>{
            //     setloading(false);
            //     toastRef.current.show("Ha ocurrido un error o ya este registrado el usuario");
            // })
            alert(email,pass);
            setloading(false);

        }
    }

    return (
        <View style={styles.container}>
            <View style={{
                borderBottomColor:"#fff",
                width:100,
                borderBottomWidth:2,
            }} />
            <Input
                placeholder="Correo"
                containerStyle={styles.input}
                rightIcon={{
                    type:"material-community",
                    name:"at",
                    color:"#128c7e",
                }}
                leftIcon={{
                    type:"material-community",
                    name:"account-circle-outline",
                    color:"#128c7e",
                }}
                onChangeText={(text) => {
                    setemail(text);
                  }}
                  value={email}
            ></Input>
            <Input
                placeholder="Contraseña"
                containerStyle={styles.input}
                leftIcon={{
                    type:"material-community",
                    name:"security",
                    color:"#128c7e",
                }}
                rightIcon={{
                    type:"material-community",
                    name: show ? "eye-off-outline": "eye-outline",
                    color:"#128c7e",
                    onPress:()=>setshow(!show)
                }}
                onChangeText={(text) => {
                    setpass(text);
                  }}
                  secureTextEntry={!show}
                  value={pass}
            ></Input>
            <Input
                placeholder="Repetir contraseña"
                containerStyle={styles.input}
                leftIcon={{
                    type:"material-community",
                    name:"security",
                    color:"#128c7e",
                }}
                rightIcon={{
                    type:"material-community",
                    name: show ? "eye-off-outline": "eye-outline",
                    color:"#128c7e",
                    onPress:()=>setshow(!show)
                }}
                onChangeText={(text) => {
                    setrepetirpass(text);
                  }}
                  secureTextEntry={!show}
                  value={repetirpass}
            ></Input>
            <Button 
                title="Crear cuenta"
                containerStyle={styles.btnEntrar}
                buttonStyle={{backgroundColor:"#4d658e"}}
                onPress={()=>crearcuenta()}
            />
            <Button 
                title="Iniciar sesión"
                containerStyle={styles.btnAtras}
                buttonStyle={{backgroundColor:"#6fa38f"}}
                onPress={()=>navigation.goBack()}
            />
            <Loading isVisible={loading} text="Espere..." />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        marginTop:20,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        alignItems:"center",
        paddingTop:20,

    },
    input:{
        width:"90%",
        marginTop:20,
        height:50,
    },
    btnEntrar:{
        width:"90%",
        marginTop:20,
    },
    btnAtras:{
        width:"90%",
        marginTop:20,
        backgroundColor:"#6fa38f"
    },
    textcrearcuenta:{
        marginTop:30,
        fontSize:15,

    },
    cuenta:{
        color:"#4d658e",
        fontSize:18,

    },
    txto:{
        fontWeight:"bold",
        fontSize:20,
        marginTop:20,
        color:"#4d658e",
    },
    btnLogin:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:"100%",
    },
    btnLoginSocial:{
        backgroundColor:"#128c7e",
        paddingHorizontal:40,
        paddingVertical:10,
        borderRadius:5,
    }
});