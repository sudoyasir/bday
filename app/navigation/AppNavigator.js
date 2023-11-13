import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { ColorfulTabBar } from "react-navigation-tabbar-collection";
import { Home, Birthdays, Settings, Calender } from "../screens";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={(props) => <ColorfulTabBar {...props} />}
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
            headerShown: false, // Hide the header for this screen
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
            headerShown: false, // Hide the header for this screen
            cardStyle: { paddingTop: 16 }, // Add padding from the top
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
            headerShown: false, // Hide the header for this screen
            cardStyle: { paddingTop: 16 }, // Add padding from the top
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
            headerShown: false, // Hide the header for this screen
            cardStyle: { paddingTop: 16 }, // Add padding from the top
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
