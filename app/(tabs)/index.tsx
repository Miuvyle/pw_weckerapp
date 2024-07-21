import { Text, View, StyleSheet } from "react-native";
import { TouchableComponent, CreateButton } from "@/components/overView"
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Index() {
  const [alarms, setAlarms] = useState([]);

  const loadAlarms = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const alarmKeys = keys.filter(key => key.startsWith('alarm_'));
      const alarmPromises = alarmKeys.map(key => AsyncStorage.getItem(key));
      const alarmValues = await Promise.all(alarmPromises);
      const loadedAlarms = alarmValues.map(value => JSON.parse(value));
      setAlarms(loadedAlarms);
    } catch (error) {
      console.log("AsyncStorage Error", error);
    }
  };
  useEffect(() => {
    loadAlarms();
  }, []);
  return (
    <View style={indexStyle.wrapper}>
      {alarms.map((alarm, index) => (
        <TouchableComponent
          key={index}
          givenTime={`${alarm.hours}:${alarm.minutes}`} />))}
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

//row: {
// flexDirection: 'row',
// flexWrap: 'wrap',
//},
