import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import { StyleSheet } from "react-native";
import { ColorfulTabBar } from "react-navigation-tabbar-collection";
import { Home, Birthdays, Settings, Calender } from "../screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AddBirthday from "../screens/AddBirthday";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create Stack Navigator

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
        tabBar={(props) => <ColorfulTabBar {...props}  />}
      >
        <Tab.Screen
          name="Home"
          component={Home}
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
          name="Calendar"
          component={Calender}
          options={{
            title: "Calendar",
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
              <Icon name="person" size={size} color={color} />
            ),
            color: "success",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
