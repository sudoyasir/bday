import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons"; // Import Feather icon from expo vector icons

interface DayItem {
  date: number;
  day: string;
}

const DayCalendar = () => {
  const [dayList, setDayList] = useState<DayItem[]>([]);

  // Helper function to get the day name
  const getDayName = (dayIndex: number): string => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[dayIndex];
  };

  useEffect(() => {
    const today = new Date();
    const todayIndex = today.getDay();

    const newDayList: DayItem[] = [];

    // Add today's date as the second item in the list
    newDayList.push({
      date: today.getDate(),
      day: getDayName(todayIndex),
    });

    // Add the next six days after today
    for (let i = 1; i < 7; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);

      newDayList.push({
        date: nextDate.getDate(),
        day: getDayName(nextDate.getDay()),
      });
    }

    setDayList(newDayList);
  }, []); // Run this effect only once on component mount

  // Render each item in the FlatList
  const renderDayItem = ({ item, index }: { item: DayItem; index: number }) => {
    const isToday = index === 1; // Today is at index 1 in the array

    // Adjust styling based on today or other days
    const cardWidth = isToday ? 80 : 70;
    const cardHeight = isToday ? 130 : 100;
    const backgroundColor = isToday ? "#ff8d8d" : "white";

    return (
      <View className="flex-1 justify-center">
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
          {!isToday && <Text style={{ fontWeight: "bold" }}>{item.day}</Text>}

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
