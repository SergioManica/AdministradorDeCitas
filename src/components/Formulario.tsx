import React, { useState } from "react";
import DatePicker from "react-native-date-picker";

import {
  Button,
  Modal,
  Text,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PacienteType } from "../types";

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
}: {
  modalVisible: boolean;
  setModalVisible: (a: boolean) => void; // Aqui estou tipando a função setModalVisible, dizendo que o tipo do parametro que será passado é um booleano e a função retorna um void.
  pacientes: PacienteType[];
  setPacientes: (pacientes: PacienteType[]) => void;
  paciente:{}
  }) => {
  // Aqui estou fazendo o destructuring do estado paciente que estou criando e fazendo praticamente a mesma coisa para o restante dos estados.
  const [paciente, setPaciente] = useState("");
  const [proprietario, setProprietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState("");

    console.log(paciente);
    

  const handleCita = () => {
    //VALIDAR

    //Aqui estou usando o metodo de arrays includes para validar, ele verifica cada item dentro do array e opera conforme a confição que eu passar para ele dentro dos parenteses.Neste caso estou passando uma string vazia. Caso seja uma string vazia , vai retornar o Alerta.
    if ([paciente, proprietario, email, fecha, sintomas].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    console.log("Agregando paciente...");

    // Aqui estou ciando um objeto com os dados do novo paciente.
    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      proprietario,
      email,
      telefono,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, nuevoPaciente]); // Aqui estou dizendo para pegar o estado atual do pacientes e adicionar um novo elemento ao array que neste caso é o nuevoPaciente e que é um objeto.
    setModalVisible(false); // Aqui estou fecnado o modal

    // Aqui estou resetando os campos de cada estado, para que possam estar vazios ao reabrir o modal.
    setPaciente("");
    setProprietario("");
    setEmail("");
    setTelefono("");
    setFecha(new Date());
    setSintomas("");
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>
          <Pressable
            onLongPress={() => setModalVisible(false)}
            style={styles.btnCancelar}
          >
            <Text style={styles.btnCancelarText}>x Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              placeholder="Nombre Paciente"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Proprietario</Text>
            <TextInput
              placeholder="Nombre Porprietario"
              placeholderTextColor={"#666"}
              style={styles.input}
              value={proprietario}
              onChangeText={setProprietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Proprietario</Text>
            <TextInput
              placeholder="johnDoe@email.com"
              placeholderTextColor={"#666"}
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Proprietario</Text>
            <TextInput
              placeholder="xx xxxxx-xxxx"
              placeholderTextColor={"#666"}
              style={styles.input}
              keyboardType="number-pad"
              value={telefono}
              onChangeText={setTelefono} // onChangeText é função de callback que retorna o valor do texto escrito no input
              maxLength={11}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                date={fecha}
                fadeToColor="none"
                onDateChange={(date) => setFecha(date)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Síntomas</Text>
            <TextInput
              placeholder="Síntomas paciente"
              placeholderTextColor={"#666"}
              style={[styles.input, styles.sintomasInput]}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#6d28d9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 10,
    color: "#fff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  btnCancelar: {
    marginHorizontal: 30,
    marginVertical: 30,
    backgroundColor: "#5827a4",
    padding: 15,
    borderRadius: 10,
  },
  btnCancelarText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  btnNuevaCita: {
    marginHorizontal: 30,
    marginVertical: 30,
    backgroundColor: "#F59E0B",
    padding: 15,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#5827a4",
  },
});

export default Formulario;
