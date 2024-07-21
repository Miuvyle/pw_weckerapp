import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TouchableComponent } from "@/components/overView"
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";


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
      <ScrollView>
        {alarms.map((alarm, index) => (
          <TouchableComponent
            key={index}
            href={{ pathname: '(tabs)/Settings', params: {alarmKey: alarm.key}}}
            givenTime={`${alarm.hours}:${alarm.minutes}`} />))}
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

//row: {
// flexDirection: 'row',
// flexWrap: 'wrap',
//},
