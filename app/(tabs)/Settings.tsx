import { Alert, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TimePicker } from '@/components/CogWheel'
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Setting() {
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const saveTime = async () => {
    console.log(hours, minutes);
    const fullTime = { hours, minutes };
    const key = `alarm_${Date.now()}`;
    console.log(key);
    console.log(fullTime);

    try {
      await AsyncStorage.setItem(key, JSON.stringify(fullTime));
      console.log("jipee");
      Alert.alert("Success", `Alarm saved: ${hours}:${minutes}`);
    } catch (error) {
      console.log("Async Error");
    }
  };
  const loadTime = async (key) => {
    try {
      const savedTime = await AsyncStorage.getItem(key);
      const { hours, minutes } = JSON.parse(savedTime);
      setHours(hours);
      setMinutes(minutes);
    } catch (error) {
      console.log("Async Error")
    }
  };


  return (
    <View style={baseStyle.container}>
      <TimePicker
        timePick={24}
        onTimeChange={setHours}
      />
      <View style={baseStyle.divider}>
      </View>
      <TimePicker
        timePick={60}
        onTimeChange={setMinutes}
      />
      <TouchableOpacity
        style={baseStyle.saveButton}
        onPress={saveTime}>
        <View>
          <Text>Save</Text>
        </View>
      </TouchableOpacity>
    </View>


  );


}





const baseStyle = StyleSheet.create({


  container:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363020",
    flexDirection: "row"
  },

  button: {

    backgroundColor: "black",
    color: "white"
  },

  divider: {

    color: "white",
    width: 10,
    height: 100,
    margin: 20,
  },

  saveButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#605C4E",
    borderRadius: 5,
  }



})
