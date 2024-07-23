import { Alert, Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TimePicker } from '@/components/CogWheel'
import React, { useState, useEffect, useCallback } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Setting() {

  // #region
  const { alarmKey } = useLocalSearchParams();
  console.log({ alarmKey });
  const router = useRouter();
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);

  const saveTime = async () => {
    console.log(hours, minutes);
    const fullTime = { hours, minutes };
    const key = alarmKey || `alarm_${Date.now()}`;
    console.log(key);

    try {
      await AsyncStorage.setItem(key, JSON.stringify(fullTime));
      Alert.alert("Success", `Alarm saved: ${hours}:${minutes}`);
      router.back();
    } catch (error) {
      console.log("Save Error");
    }
  };
  const loadTime = async (key) => {
    try {
      const savedTime = await AsyncStorage.getItem(key);
      const { hours, minutes } = JSON.parse(savedTime);
      setHours(hours);
      setMinutes(minutes);
    } catch (error) {
      console.log("Load Error")
    }
  };

  const deleteTime = async () => {
    try {
      console.log(`HHAHAHA ${alarmKey}`)
      const item = await AsyncStorage.removeItem(alarmKey);
      console.log('Item after removal:', item);
      router.back();
    } catch (error) {
      console.log("Deletion error")
    }
  };
  useEffect(() => {
    if (alarmKey) {
      loadTime(alarmKey);
    }
  }, [alarmKey]);

  // #endregion



  return (
    <View>Das ist die Settings page wo euer Code steht!</View>
    //wrapper 
    //ZeitWaehl Compnent fuer die Stunden
    //Styling Element
    //ZeitWaehl Component fuer die minuten
    //Styling wrapper Knoepfe
    //LoeschenKnopf
    //Bild fuer den Loeschen LoeschenKnopf
    //SpeicherKnopf
    //Bild fuer SpeichernKnopf
    // !!wrapper schliessen nicht vergessen?

  );


}


// #region


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
  },
  deleteButton: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: "#605C4E",
    borderRadius: 5,
  },
  buttons: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // #endregion


})
