import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Perfil from "../Pantallas/Perfil/Perfil";

const stack = createStackNavigator();

export default function PerfilStack(){
    return (
        <stack.Navigator>
            <stack.Screen component={Perfil} name="perfil" options={{headerShown:false}}/>
        </stack.Navigator>
    )
}
