import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigation.navigate("Dashboard");
    } else {
      alert("Por favor, preencha todos os campos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Entrar" onPress={handleLogin} />
      <Text
        style={styles.link}
        onPress={() => navigation.navigate("AddProject")}
      >
        Criar Conta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
  },
  link: {
    textAlign: "center",
    color: "#0066cc",
    marginTop: 20,
  },
});

export default LoginScreen;
