import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TouchableComponent } from "@/components/overView"
import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  useRouter } from "expo-router";
import { useFocusEffect} from "@react-navigation/native";


export default function Index() {
  const [alarms, setAlarms] = useState([]);
  const router = useRouter();
  const [switchStates, setSwitchStates] = useState({});

  const loadAlarms = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const alarmKeys = keys.filter(key => key.startsWith('alarm_'));
      const alarmPromises = alarmKeys.map(async key => {
        const value = await AsyncStorage.getItem(key);
        const alarm = JSON.parse(value);
        return { ...alarm, key };
      });
      const loadedAlarms = await Promise.all(alarmPromises);
      setAlarms(loadedAlarms);
    } catch (error) {
      console.log("AsyncStorage Error", error);
    }
  };
  useFocusEffect(
    useCallback(() => {
    loadAlarms();
  }, []));
  const toggleSwitch = (index) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  return (
    <View  style={indexStyle.wrapper}>
      <ScrollView>
        {alarms.map((alarm, index) => {
          return (
            <TouchableComponent
              key={index}
              href={{ pathname: '(tabs)/Settings', params: { alarmKey: alarm.key } }}
              givenTime={`${alarm.hours}:${alarm.minutes}`}
              currentKey={index}
              onToggleSwitch={() => toggleSwitch(index)}
              currentState={switchStates[index] || false}
            />);
        })}
      </ScrollView>
    </View>
  );
}

const indexStyle = StyleSheet.create({

  wrapper:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#363020'
  }
})
