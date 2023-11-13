import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const TodaysBirthdayCard = ({ name, age, imageUrl, dob, daysRemaining }) => {
  return (
    <View
      className="flex-row rounded-md justify-between items-center"
      style={{
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#67b2ab",
      }}
    >
      {/* First Column: Days Remaining */}
      <View
        className="flex-col items-center"
        style={{
          width: "20%",
          height: "100%",
          padding: 10,
          alignItems: "center",
          borderTopLeftRadius: 4,
          borderBottomLeftRadius: 4,
          backgroundColor: "#67b2ab",
        }}
      >
        <Text className="text-lg font-bold text-white">{daysRemaining}</Text>
        <Text className="text-sm text-white">days</Text>
      </View>

      {/* Second Column: Picture */}
      <Image
        source={{ uri: imageUrl }}
        className="w-16 h-16 rounded-full my-2 ml-2"
      />

      {/* Third Column: Name and Date of Birth */}
      <View className="flex-1 ml-4">
        <Text className="font-bold text-base">{name}</Text>
        <Text className="text-gray-600 text-sm">
          {dob}
        </Text>
        <Text className="text-gray-600 text-sm">
          {age} years
        </Text>
      </View>

      {/* Fourth Column: More Icon */}
      <View className="flex items-center justify-end" style={{ width: "20%" }}>
        <Feather name="more-vertical" size={24} color="black" />
      </View>
    </View>
  );
};

export default TodaysBirthdayCard;
