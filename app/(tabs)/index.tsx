import { Text, View, StyleSheet, ScrollView } from "react-native";
import { AddButton, TouchableComponent } from "@/components/overView"
import React, { useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import { alarmSet, cancelAlarm } from "@/components/alarmComponent";


export default function Index() {

  // #region
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
  // #endregion

  return (
    /* Füge ein "View" ein um der App eine Grundstruktur zu geben.*/
    <View style={indexStyle.wrapper}>
      <ScrollView>
        {/*Verwende alarm.map um durch die ganzen gesetzten Urhzeiten zu iterrieren
        Zur hilfe schau auf die website
        https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know-de */}
        {alarms.map((alarm, index) => {
          console.log(typeof switchStates)
          {/* Erstelle eine If-Funktion um herauszufinden, ob der aktuelle Schalter an oder aus ist und führe die dafür
        vorgesehene Funktion aus (alarmSet({}) / cancelAlarm({}))
        https://michaelkipp.de/processing/if.html
        */}
          if (switchStates[index]) {
            alarmSet({ componentHours: alarm['hours'], componentMinutes: alarm['minutes'], theKey: alarm[`key`] })
          }
          else {
            cancelAlarm(alarm['key'])
            console.log(`Alarm with the ID ${alarm[`key`]} was canceled`)
          }

          return (
            /*Erstelle die Komponente, die den User-Input regrestriert
             * TouchableComponent 
             * key=
             * href=
             * givenTime=
             * currentKey=
             * onToggleSwitch={()=> toggleSwitch(index)}
             * currentState=*/
            <TouchableComponent
              key={index}
              href={{ pathname: '(tabs)/Settings', params: { alarmKey: alarm['key'] } }}
              givenTime={`${alarm['hours']}:${alarm['minutes']}`}
              currentKey={index}
              onToggleSwitch={() => toggleSwitch(index)}
              currentState={switchStates[index] || false}
            />
          );
        })}
      </ScrollView>
      <AddButton />
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
