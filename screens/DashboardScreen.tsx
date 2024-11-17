import React, { useState } from "react";
import { View, Text, FlatList, Alert, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import Card from "../components/Card";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../App";

type DashboardScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Dashboard"
>;

interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

interface DashboardScreenProps {
  navigation: DashboardScreenNavigationProp;
}

const DashboardScreen: React.FC<DashboardScreenProps> = ({ navigation }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "Projeto 1",
      description: "Descrição do projeto 1",
      status: "Em andamento",
    },
    {
      id: "2",
      name: "Projeto 2",
      description: "Descrição do projeto 2",
      status: "Concluído",
    },
  ]);

  const removeProject = (id: string) => {
    Alert.alert("Confirmar", "Deseja realmente excluir este projeto?", [
      { text: "Cancelar" },
      {
        text: "Excluir",
        onPress: () =>
          setProjects((prevProjects) =>
            prevProjects.filter((project) => project.id !== id)
          ),
      },
    ]);
  };

  const editProject = (project: Project) => {
    navigation.navigate("AddProject", { project });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button
        title="Adicionar Projeto"
        onPress={() => navigation.navigate("AddProject")}
      />
      <View style={styles.filters}>
        <Input
          placeholder="Filtrar por status"
          value=""
          onChangeText={() => {}}
        />
        <Input
          placeholder="Filtrar por data"
          value=""
          onChangeText={() => {}}
        />
      </View>
      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Text style={styles.projectName}>{item.name}</Text>
            <Text>Status: {item.status}</Text>
            <Button
              title="Editar"
              onPress={() => editProject(item)}
              color="#28a745"
            />
            <Button
              title="Excluir"
              onPress={() => removeProject(item.id)}
              color="#dc3545"
            />
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  filters: {
    marginBottom: 20,
  },
  projectName: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DashboardScreen;
