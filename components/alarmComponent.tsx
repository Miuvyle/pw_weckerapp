import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import AsyncStorage from "@react-native-async-storage/async-storage";



export async function scheduleAlarm(trigger, theKey) {
  const notificationID = await Notifications.scheduleNotificationAsync({
    content: {
      title: "The Boy who lives!",
      body: "Come to diiiiee!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger,
  });
  await AsyncStorage.setItem(`alarm:${theKey}`, notificationID)
}

export async function cancelAlarm(theKey) {
  const notificationID = await AsyncStorage.getItem(`alarm:${theKey}`);
  if (notificationID) {
    await Notifications.cancelScheduledNotificationAsync(notificationID)
    await AsyncStorage.removeItem(`alarm:${theKey}`)

  }

}

export function getUserPermission() {

  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    })();
  }, []);
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export function alarmSet({ componentHours, componentMinutes, theKey }) {
  console.log(`Hours: ${componentHours} and Minutes: ${componentMinutes}`)
  const currentTime = new Date();
  const alarmTime = new Date();
  alarmTime.setHours(componentHours);
  alarmTime.setMinutes(componentMinutes);
  alarmTime.setSeconds(0);
  if (alarmTime <= currentTime) {
    alarmTime.setDate(alarmTime.getDate() + 1)
  }
  console.log(`alarm with the key ${theKey}, going off in ${alarmTime}`)
  scheduleAlarm(alarmTime, theKey)
}


