import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

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

  const handlePictureSelect = (picture) => {
    setSelectedPicture(picture);
  };

  const handleAddBirthday = () => {
    console.log("Name:", name);
    console.log("Selected Picture:", selectedPicture);
    console.log("Birthday:", birthday);
    // Implement logic to handle adding birthday with selected picture
  };

  const navigation = useNavigation();

  function handleGoHome() {
    navigation.navigate("Home");
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || birthday;
    setShowDatePicker(false);
    setBirthday(currentDate);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoHome}>
          <MaterialIcons name="arrow-back" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Birthday</Text>
      </View>

      {/* Display the selected picture */}
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

      {/* Show Date Picker */}
      <TouchableOpacity
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Text style={styles.datePickerButtonText}>
          {birthday.toLocaleDateString()}
        </Text>
      </TouchableOpacity>

      {/* Render Date Picker if showDatePicker is true */}
      {showDatePicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}

      <Button title="Add Birthday" onPress={handleAddBirthday} />
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
    display: "flex",
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
    width: "23%", // Adjusted width to fit 4 pictures in a row
    aspectRatio: 1,
    position: "relative",
  },
  picture: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  previewImageContainer: {
    alignItems: "center", // Align the image in the center
    marginBottom: 20, // Adjust margin as needed
    position: "relative",
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  checkIcon: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  pictureCheckIcon: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  datePickerButton: {
    backgroundColor: "gray",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  datePickerButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default AddBirthday;
