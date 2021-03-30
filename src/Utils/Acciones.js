import {firebaseapp} from "./Firebase";
import * as firebase from "firebase";


export const validarSession = ()=>
{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            console.log("usuario logueado");
        }else{
            console.log("usuario no logueado");
        }
    });
};

export const cerrarsession = ()=>
{
    firebase.auth.signOut();
};