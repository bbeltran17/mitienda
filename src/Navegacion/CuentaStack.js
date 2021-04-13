import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import EnviarConfirmacion from "../Pantallas/Cuenta/EnviarConfirmacion";
import ConfirmarNumero from "../Pantallas/Cuenta/ConfirmarNumero";

const stack = createStackNavigator();

export default function CuentaStack(){
    return (
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen component={EnviarConfirmacion} name="enviar-confirmacion" 
            options={{title:'Confirma tu número',
            headerstyle:{backgroundcolor:'#4d658e'},
            headertintcolor:'#fff'}
            }/>

<stack.Screen component={ConfirmarNumero} name="confirmar-movil" 
            options={{title:'Confirma tu número',
            headerstyle:{backgroundcolor:'#4d658e'},
            headertintcolor:'#fff'}
            }/>
        </stack.Navigator>
        </NavigationContainer>
    )
}