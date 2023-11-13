import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const TodaysBirthdayCard = ({ name, age, imageUrl, dob }) => {
  return (
    <View className="flex-row rounded-md px-4 py-3 justify-between items-center" style={{backgroundColor: "#53a8ff30"}}>
      {/* First Column: Picture */}
      <Image source={{ uri: imageUrl }} className="w-14 h-14 rounded-lg" />

      {/* Second Column: Name and Date of Birth */}
      <View className="flex-1 ml-4">
        <Text className="font-bold p-0">{name}</Text>
        <Text className=" text-gray-600">{dob}</Text>
      </View>

      {/* Third Column: Age */}
      <View className="flex-1 flex-row justify-between">
        <Text className="text-lg font-bold text-center" style={{color: "#53a8ff"}}>{age} years</Text>
        <Feather name="more-vertical" size={24} color="black" />
      </View>
    </View>
  );
};

export default TodaysBirthdayCard;
