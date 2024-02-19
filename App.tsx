import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Formulario from "./src/components/Formulario";
import { PacienteType } from "./src/types";
import PacienteComponent from "./src/components/Paciente";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState<PacienteType[]>([]);

  const nuevaCitaHandler = () => {
    return setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{" "}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable style={styles.btnNuevaCita} onPress={nuevaCitaHandler}>
        <Text style={styles.btnTextNuevaCita}>Nueva cita</Text>
      </Pressable>

      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No ahy pacientes aun</Text>
      ) : (
        <FlatList
        style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={() => {
            return <PacienteComponent item={pacientes[0]} setModalVisible={setModalVisible} />;
          }}
        />
      )}

      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "600",
    color: "#374151",
  },
  tituloBold: {
    fontWeight: "900",
    fontSize: 30,
    color: "#6D28D9",
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFF",
    fontWeight: "900",
  },
  noPacientes: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 24,
    fontWeight: "600",
  },
  listado:{
    marginTop:50,
    marginHorizontal:30
  },
  pacientes: {},
});
