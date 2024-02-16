import React from "react";
import { Text, View } from "react-native";

const Paciente = ({item}:{item:{paciente:string, fecha:Date}}) => {
  // aqui estou aplicando destructuring para criar as variaveis paciente, fecha e etc. Segue o exemplo se destructuring:
  // const paciente = paciente.item
  // const fecha = fecha.item 
   const { paciente, fecha } = item 

   //Aqui estou criando uma função para formatar a data para um formato mais legivel.
   const formatearFecha = ({fecha}:{fecha:Date})  => {
    const nuevaFecha = new Date(fecha)
    const opciones = {
      weeday:'long',
      year: 'numeric',
      month:'long',
      day:'numeric'
    } as const 
    return nuevaFecha.toLocaleDateString('pt-br', opciones)
   }

  return (
    <View>
      <Text> {paciente}</Text>
    </View>
  );
};

export default Paciente;
