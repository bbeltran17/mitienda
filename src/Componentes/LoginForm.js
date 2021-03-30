import React,{useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Icon, Input, Button, Divider} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";
import {validaremail} from "../Utils/Utils.js"
import {isEmpty} from "lodash";
import * as firebase from "firebase";
import Loading from "../Componentes/Loading";

export default function LoginForm (props){
    const {toastRef} = props;
    const navigation = useNavigation();
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [show, setshow] = useState(true);
    const [loading, setloading] = useState(false);
    

    const iniciarsesion = ()=>
    {
        if(isEmpty(email) || isEmpty(pass))
        {
            toastRef.current.show("Debes ingresar los valores de email y password");
        }
        else if(!validaremail(email)){
            toastRef.current.show("Debes ingresar un correo válido");
        }else{
            setloading(true);
            firebase
            .auth()
            .signInWithEmailAndPassword(email,pass)
            .then(()=>{
                setloading(false);
                toastRef.current.show("Sesión iniciada correctamente");
                console.log(firebase.auth().currentUser);
            })
            .catch(()=>{
                setloading(false);
                toastRef.current.show("Error al iniciar sesión");
            });
        }
    };
    
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
                    name: show ? "eye-outline":"eye-off-outline",
                    color:"#128c7e",
                    onPress:()=>setshow(!show)
                }}
                onChangeText={(text) => {
                    setpass(text);
                  }}
                  secureTextEntry={show}
                  value={pass}
            ></Input>
            <Button 
                title="Ingresar"
                containerStyle={styles.btnEntrar}
                buttonStyle={{backgroundColor:"#4d658e"}}
                onPress={()=>iniciarsesion()}
            />
            <Text styles={styles.textcrearcuenta}>¿No tienes cuenta?
                <Text 
                    styles={styles.cuenta}
                    onPress={()=> navigation.navigate("register")}
                >{""} Crear cuenta</Text>
            </Text>
            <Divider 
                style={{
                    backgroundColor:"#4d658e",
                    height:1,
                    width:"90%",
                    marginTop:20,
                }}
            />
            <Text styles={styles.txto}>O</Text>
            <View styles={styles.btnLogin}>
                <TouchableOpacity styles={styles.btnLoginSocial}>
                    <Icon 
                        size={24}
                        tupe="material-community"
                        name="facebook"
                        color="red"
                        backgroundColor="transparent"
                    />
                </TouchableOpacity>
                <TouchableOpacity styles={styles.btnLoginSocial}>
                    <Icon 
                        size={24}
                        tupe="material-community"
                        name="facebook"
                        color="red"
                        backgroundColor="transparent"
                    />
                </TouchableOpacity>
            </View>
            <Loading isVisible={loading} text="Favor espere"></Loading>
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