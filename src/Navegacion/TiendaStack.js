import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import Tienda from "../Pantallas/Tienda/Tienda";
import MensajesList from "../Pantallas/Tienda/MensajesList";
import Detalle from "../Pantallas/Tienda/Detalle";
import Contacto from "../Pantallas/Tienda/Contacto";
import AddProduct from "../Pantallas/Tienda/AddProduct";

const Stack = createStackNavigator();


export default function TiendaStack()
{
    return (
        <Stack.Navigator>
            <Stack.Screen component={Tienda} name='Tienda' options={{headerShown:false}} />

            <Stack.Screen component={AddProduct} name='add-product' 
            options={{title:'Agregar nuevo producto',headerStyle:{backgroundColor:'blue'},headerTintColor:'#fff' }}
            
            />

            <Stack.Screen component={Detalle} name='detalle'
            options={{title:'',headerTransparent:true,headerTintColor:'#fff' }}
            />

            <Stack.Screen component={MensajesList} name='mensajes'  
            options={{title:'',headerTransparent:true,headerTintColor:'#fff' }}
            />

            <Stack.Screen component={Contacto} name='contacto'  
            options={{title:'',headerTransparent:true,headerTintColor:'#fff' }}
            />

        </Stack.Navigator>
    )
}