import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { PacienteType } from "../types";

const Paciente = ({
  item,
  setModalVisible,
  pacienteEditar,
}: {
  item: { paciente: string; fecha: Date };
  setModalVisible: (a: boolean) => void;
  pacienteEditar: (id: number) => void;
}) => {
  // aqui estou aplicando destructuring para criar as variaveis paciente, fecha e etc. Segue o exemplo se destructuring:
  // const paciente = paciente.item
  // const fecha = fecha.item
  const { paciente, fecha } = item;

  //Aqui estou criando uma função para formatar a data para um formato mais legivel.
  const formatearFecha = ({ fecha }: { fecha: Date }) => {
    const nuevaFecha = new Date(fecha);
    const opciones = {
      weeday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    } as const;
    return nuevaFecha.toLocaleDateString("es-es", opciones);
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.label}>Paciente:</Text>
      <Text style={styles.texto}> {paciente}</Text>
      <Text style={styles.fecha}>{formatearFecha({ fecha })}</Text>
      <View style={styles.contenedorBotones}>
        <Pressable
          onLongPress={() => {
            setModalVisible(true);
            pacienteEditar;
          }}
          style={[styles.btn, styles.btnEditar]}
        >
          <Text style={styles.btnTexto}>Editar</Text>
        </Pressable>
        <Pressable style={[styles.btn, styles.btnEliminar]}>
          <Text style={styles.btnTexto}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Paciente;

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "#fff",
    padding: 20,
    borderBottomColor: "#94a3b8",
    borderBottomWidth: 1,
  },
  label: {
    color: "#374151",
    fontWeight: "700",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  texto: {
    color: "#6d28d9",
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 10,
  },
  fecha: {
    color: "#374151",
  },
  contenedorBotones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  btnEditar: {
    backgroundColor: "#f59e0b",
  },
  btnEliminar: {
    backgroundColor: "#ef4444",
  },
  btnTexto: {
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "700",
    color: "#fff",
  },
});
