import {firebaseapp} from "./Firebase";
import * as firebase from "firebase";


export const validarSession = (setvalidarsesion)=>
{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            setvalidarsesion(true);
        }else{
            setvalidarsesion(false);
        }
    });
};

export const cerrarsession = ()=>
{
    firebase.auth().signOut();
};

export const validarPhone = (setphoneauth)=>
{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user.phoneNumber){
            setphoneauth(true);
        }
    });
};