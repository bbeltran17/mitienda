import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import MiTienda from "../Pantallas/MiTienda/MiTienda";
import EditarProducto from "../Pantallas/MiTienda/EditarProducto";

const Stack = createStackNavigator();


export default function  MiTiendaStack(){
    return(
        <Stack.Navigator screenoptions={{headerstyle:{backgroundcolor:'#4d658e'}, headertintcolor:'#fff'}} >
            <Stack.Screen component={MiTienda} name='mitienda' options={{title:'Mi Tienda'}} />
            <Stack.Screen component={EditarProducto} name='edit-product' options={{title:'Editar producto'}} />
        </Stack.Navigator>
    )
}