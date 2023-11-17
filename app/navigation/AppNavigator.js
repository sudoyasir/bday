import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ColorfulTabBar } from "react-navigation-tabbar-collection";
import { Home, Birthdays, Settings, Calender } from "../screens"; // Update the screen paths accordingly
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet } from "react-native";
import AddBirthday from "../screens/AddBirthday"; // Update the screen path accordingly

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      tabBar={(props) => <ColorfulTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        // Rendering HomeStack as component so that nested navigation can work properly
        component={HomeStack}
        options={{
          title: "Home",
          icon: ({ focused, color, size }) => (
            <Icon name="home-variant" size={size} color={color} />
          ),
          color: "primary",
        }}
      />

      <Tab.Screen
        name="Birthdays"
        component={Birthdays}
        options={{
          title: "Birthdays",
          icon: ({ focused, color, size }) => (
            <Icon name="cake-variant" size={size} color={color} />
          ),
          color: "info",
        }}
      />
      <Tab.Screen
        name="Calender"
        component={Calender}
        options={{
          title: "Calender",
          icon: ({ focused, color, size }) => (
            <Icon name="calendar-month" size={size} color={color} />
          ),
          color: "danger",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Settings",
          icon: ({ focused, color, size }) => (
            <Icon name="cog" size={size} color={color} />
          ),
          color: "success",
        }}
      />
    </Tab.Navigator>
  );
};

// HomeStack is a nested stack navigator for Home tab
const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddBirthday" component={AddBirthday} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
