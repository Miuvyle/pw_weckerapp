import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';




export async function scheduleAlarm(trigger) {
  const notificationID = await Notifications.scheduleNotificationAsync({
    content: {
      title: "The Boy who lives!",
      body: "Come to diiiiee!",
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
    },
    trigger,
  });
  console.log(notificationID)
  return (notificationID)
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

export function alarmSet({ componentHours, componentMinutes }) {
  console.log(`Hours: ${componentHours} and Minutes: ${componentMinutes}`)
  const currentTime = new Date();
  const alarmTime = new Date();
  alarmTime.setHours(componentHours);
  alarmTime.setMinutes(componentMinutes);
  alarmTime.setSeconds(0);
  if (alarmTime <= currentTime) {
    alarmTime.setDate(alarmTime.getDate() + 1)
  }
  console.log(`alarm going off in ${alarmTime}`)
  const scheduleId = scheduleAlarm(alarmTime)
  console.log(scheduleId)
  return (scheduleId)
}


