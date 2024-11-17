import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../App";

type AddProjectScreenRouteProp = RouteProp<RootStackParamList, "AddProject">;

interface Project {
  id?: string;
  name: string;
  description: string;
  status: string;
}

interface AddProjectScreenProps {
  route: AddProjectScreenRouteProp;
  navigation: any;
}

const AddProjectScreen: React.FC<AddProjectScreenProps> = ({
  route,
  navigation,
}) => {
  const { project } = route.params || {};

  const [projectData, setProjectData] = useState<Project>({
    name: project?.name || "",
    description: project?.description || "",
    status: project?.status || "Em andamento",
  });

  const handleSave = () => {
    if (project) {
      console.log("Editando o projeto:", projectData);
    } else {
      console.log("Adicionando novo projeto:", projectData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {project ? "Editar Projeto" : "Adicionar Projeto"}
      </Text>
      <Input
        placeholder="Nome do Projeto"
        value={projectData.name}
        onChangeText={(text) => setProjectData({ ...projectData, name: text })}
      />
      <Input
        placeholder="Descrição"
        value={projectData.description}
        onChangeText={(text) =>
          setProjectData({ ...projectData, description: text })
        }
      />
      <Input
        placeholder="Status"
        value={projectData.status}
        onChangeText={(text) =>
          setProjectData({ ...projectData, status: text })
        }
      />
      <Button title="Salvar Projeto" onPress={handleSave} />
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
});

export default AddProjectScreen;
