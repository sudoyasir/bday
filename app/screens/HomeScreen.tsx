// HomeScreen.js or HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import DayCalendar from "../components/DayCalender";
import TodaysBirthdayCard from "../components/TodaysBirthdayCard";
import UpCommingBirthdaysCard from "../components/UpCommingBirthdaysCard";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddBirthday from "./AddBirthday";

const HomeScreen = () => {
  const user = {
    name: "John Doe",
    age: 30,
    imageUrl:
      "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=338&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=ais", // Replace with the actual image URL
    dob: "Jan 1, 1990",
  };
  const upcomingBirthdays = [
    {
      name: "Alice",
      age: 25,
      imageUrl:
        "https://img.freepik.com/premium-psd/3d-illustration-human-avatar-profile_23-2150671167.jpg",
      dob: "1998-08-15",
      daysRemaining: 7,
    },
    {
      name: "Bob",
      age: 28,
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?t=st=1699903084~exp=1699903684~hmac=1c92ee9b3894812aa8e6aac23d206403a2f0baafda8f89148d00930625f40acc",
      dob: "1995-11-22",
      daysRemaining: 12,
    },
    {
      name: "Alice",
      age: 25,
      imageUrl:
        "https://img.freepik.com/premium-psd/3d-illustration-human-avatar-profile_23-2150671167.jpg",
      dob: "1998-08-15",
      daysRemaining: 7,
    },
    {
      name: "Bob",
      age: 28,
      imageUrl:
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671151.jpg?t=st=1699903084~exp=1699903684~hmac=1c92ee9b3894812aa8e6aac23d206403a2f0baafda8f89148d00930625f40acc",
      dob: "1995-11-22",
      daysRemaining: 12,
    },
    // Add
  ];
  const navigate = useNavigation();

  function handleAddBirthday() {
    navigate.navigate("AddBirthday");
  }

  return (
    <View className="container p-5" showsVerticalScrollIndicator={false}>
      <View className="flex-row justify-between items-center mt-16 mb-5">
        {/* Text on the left */}
        <View className="">
          <Text className="font-bold text-lg">Hi Yasir,</Text>
          <Text className="text-gray-600">Who we are celebrating today?</Text>
        </View>

        {/* Icon on the right */}
        <Icon name="bell" size={24} color="black" />
      </View>

      <DayCalendar />

      <View className="mt-3">
        <TouchableOpacity
          className="flex-row justify-center items-center bg-gray-300"
          style={{
            padding: 10,
            borderRadius: 5,
            marginTop: 10,
          }}
          onPress={() => {
            handleAddBirthday();
          }}
        >
          <Text className="font-bold text-gray-900">Add Birthdays</Text>
          <Icon
            className=""
            color={"#141c2d"}
            name="plus-circle"
            size={24}
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>

      <View className="mt-5 flex justify-between flex-row items-center">
        <Text className="font-bold text-lg">Today's Birthdays</Text>
        <Text className="text-gray-600">View all</Text>
      </View>

      {/* Today's birthday card */}
      <View className="mt-2">
        <TodaysBirthdayCard {...user} />
      </View>

      <View className="mt-5 flex justify-between flex-row items-center">
        <Text className="font-bold text-lg">Upcoming Birthdays</Text>
        <Text className="text-gray-600">View all</Text>
      </View>

      {/* Today's birthday card */}
      <View className="">
        <FlatList
          data={upcomingBirthdays}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="mt-2">
              <UpCommingBirthdaysCard {...item} />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
