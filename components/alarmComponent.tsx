import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Taskmanager from 'expo-task-manager';
import { View, Button, Platform } from 'react-native';




export async function scheduleAlarm(trigger) {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "The Boy who lives!",
      body: "Come to diiiiee!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger,
  });
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
    shouldSetBadge: false,
  }),
});

export function alarmSet({ componentHours, componentMinutes }) {
  const currentTime = new Date();
  const alarmTime = new Date();
  alarmTime.setHours(componentHours);
  alarmTime.setMinutes(componentMinutes);
  alarmTime.setSeconds(0);
  if (alarmTime <= currentTime) {
    alarmTime.setDate(alarmTime.getDate() + 1)
  }
  console.log(`alarm going off in ${alarmTime}`)
  scheduleAlarm(alarmTime)
}


