import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

const AddBirthday = () => {
  const [name, setName] = useState("");
  const [selectedPicture, setSelectedPicture] = useState(
    require("../../assets/avatars/Avatar1.jpg")
  );
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const cartoonPictures = [
    require("../../assets/avatars/Avatar1.jpg"),
    require("../../assets/avatars/Avatar2.jpg"),
    require("../../assets/avatars/Avatar3.jpg"),
    require("../../assets/avatars/Avatar4.jpg"),
    require("../../assets/avatars/Avatar5.jpg"),
    require("../../assets/avatars/Avatar6.jpg"),
    require("../../assets/avatars/Avatar7.jpg"),
    require("../../assets/avatars/Avatar8.jpg"),
  ];

  useEffect(() => {
    // Initialize the database when the component mounts
    initializeDatabase();
  }, []);

  const handleAddBirthday = async () => {
    try {
      // Format the birthday in the desired format (DD/MM/YYYY)
      const formattedBirthday = birthday.toLocaleDateString("en-GB");

      // Create an object representing the birthday data
      const birthdayData = {
        name,
        selectedPicture, // assuming selectedPicture is an object with a 'uri' property
        birthday: formattedBirthday,
      };

      // Add birthday to the database
      addBirthdayToDatabase(name, selectedPicture, formattedBirthday);

      // Show Toast and log success
      Toast.show({
        // Toast notification code
      });
      console.log("Birthday data added to the database:", birthdayData);
    } catch (error) {
      // Error handling
    }
  };

  const handleShowAllData = async () => {
    try {
      const birthdays = await getAllBirthdaysFromDatabase();

      if (birthdays && birthdays.length > 0) {
        // Handle the data
        console.log("All birthdays from database:", birthdays);
      } else {
        console.log("No birthdays found in the database.");
      }
    } catch (error) {
      console.error("Error retrieving birthdays:", error);
    }
  };

  const handlePictureSelect = (picture) => {
    setSelectedPicture(picture);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(false);
    setBirthday(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Birthday</Text>
      </View>

      {selectedPicture && (
        <View style={styles.previewImageContainer}>
          <Image source={selectedPicture} style={styles.selectedImage} />
        </View>
      )}

      <View style={styles.pictureContainer}>
        {cartoonPictures.map((picture, index) => (
          <TouchableOpacity
            key={index}
            style={styles.pictureItem}
            onPress={() => handlePictureSelect(picture)}
          >
            <Image source={picture} style={styles.picture} />
            {selectedPicture === picture && (
              <MaterialIcons
                name="check-circle"
                size={20}
                color="#fff"
                style={styles.pictureCheckIcon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerButtonText}>
          {birthday.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <Button title="Add Birthday" onPress={handleAddBirthday} />

      <Button title="Show All Data" onPress={handleShowAllData} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderWidth: 3,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "#000",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  pictureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  pictureItem: {
    marginBottom: 15,
    width: "23%",
    aspectRatio: 1,
    position: "relative",
  },
  picture: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  previewImageContainer: {
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  pictureCheckIcon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  datePickerButton: {
    flexDirection: "row",
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  datePickerButtonText: {
    color: "#fff",
    fontSize: 15,
    marginRight: 10,
  },
  cakeIcon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
  },
});

export default AddBirthday;
