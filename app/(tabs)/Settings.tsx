import { Alert, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TimePicker } from '@/components/CogWheel'
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Setting() {
  const {alarmKey} = useLocalSearchParams();
  console.log({alarmKey});
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const saveTime = async () => {
    console.log(hours, minutes);
    const fullTime = { hours, minutes };
    const key = alarmKey || `alarm_${Date.now()}`;

    try {
      await AsyncStorage.setItem(key, JSON.stringify(fullTime));
      Alert.alert("Success", `Alarm saved: ${hours}:${minutes}`);
      router.back();
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
useEffect(()=> {
  if (alarmKey) {
  loadTime(alarmKey);}
}, [alarmKey]);

  return (
    <View style={baseStyle.container}>
      <TimePicker
        timePick={24}
        onTimeChange={setHours}
        initialSelectedIndex={hours !== null ? hours : 0}
      />
      <View style={baseStyle.divider}>
      </View>
      <TimePicker
        timePick={60}
        onTimeChange={setMinutes}
        initialSelectedIndex={minutes !== null ? minutes : 0}
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
