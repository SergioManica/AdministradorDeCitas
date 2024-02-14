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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Formulario = ({
  modalVisible,
  setModalVisible,
}: {
  modalVisible: boolean;
  setModalVisible: (a:boolean) => void;
}) => {
  const [paciente, setPaciente] = useState("");
  const [nombrePropietario, setProprietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const [sintomas, setSintomas] = useState("");

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
              value={nombrePropietario}
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
              onChangeText={setTelefono}
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
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log(paciente);
            }}
          >
            <Text>Enviar</Text>
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
  button: {
    alignSelf: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 40,
  },
});

export default Formulario;
