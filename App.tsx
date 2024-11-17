import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "./screens/DashboardScreen";
import AddProjectScreen from "./screens/AddProjectScreen";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

export type RootStackParamList = {
  Dashboard: undefined;
  AddProject: { project?: Project };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="AddProject" component={AddProjectScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
