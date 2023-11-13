import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icon from expo vector icons

interface DayItem {
  date: number;
  day: string;
}

const DayCalendar = () => {
  const [dayList, setDayList] = useState<DayItem[]>([]);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1);

  // Helper function to get the day name
  const getDayName = (dayIndex: number): string => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
  };

  useEffect(() => {
    // Generate an array of date objects for the next 7 days
    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 6);

    const newDayList: DayItem[] = [];
    let currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      newDayList.push({
        date: currentDate.getDate(),
        day: getDayName(currentDate.getDay()),
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    // Find the index of the current day
    const todayIndex = new Date().getDay();

    setDayList(newDayList);
    setCurrentDayIndex(todayIndex);
  }, []); // Run this effect only once on component mount

  // Render each item in the FlatList
  const renderDayItem = ({ item, index }: { item: DayItem; index: number }) => {
    const isToday = index === currentDayIndex;
    const cardWidth = isToday ? 80 : 70; // Adjust the size based on your preference
    const cardHeight = isToday ? 130 : 100; // Adjust the size based on your preference
    const backgroundColor = isToday ? "#ff8d8d" : "white";

    return (
      <View className="flex-1 justify-center mt-5">
        <View
          style={{
            borderRadius: isToday ? 10 : 0,
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            backgroundColor,
            width: cardWidth,
            height: cardHeight,
            
          }}
        >
          {/* Today text */}
          {isToday && (
            <Text style={{ fontWeight: "bold", color: "white" }}>Today</Text>
          )}

          {/* Date */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: isToday ? "bold" : "normal",
              color: isToday ? "white" : "black",
            }}
          >
            {item.date}
          </Text>

          {/* Day */}
          {!isToday && (
            <Text style={{ fontWeight: "bold" }}>{item.day}</Text>
          )}

          {/* Icon at the bottom */}
          {isToday && <Feather name="bell" size={20} color="white" />}
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={dayList}
      renderItem={renderDayItem}
      keyExtractor={(item) => item.date.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default DayCalendar;
