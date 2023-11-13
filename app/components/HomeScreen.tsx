// HomeScreen.js or HomeScreen.tsx
import React from "react";
import { View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <View className="container p-5">
      <View className="flex-row justify-between items-center mt-28">
        {/* Text on the left */}
        <View className="">
          <Text className="font-bold text-lg">Hi Yasir,</Text>
          <Text className="text-gray-600">Who we are celebrating today?</Text>
        </View>

        {/* Icon on the right */}
        <Feather name="bell" size={24} color="black" />
      </View>
    </View>
  );
};

export default HomeScreen;
