import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';
import * as Taskmanager from 'expo-task-manager';
import { View, Button, Platform } from 'react-native';




export async function scheduleAlarm(trigger) {
  useEffect(() => {
    (async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    })();
  }, []);
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

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export function alarmSet() {
  const date = new Date(Date.now() + 10 * 1000);
  scheduleAlarm(date)
}


export default function Alarm() {

  const handleSetAlarm = () => {
    const date = new Date(Date.now() + 10 * 1000);
    scheduleAlarm(date);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Set Alarm" onPress={handleSetAlarm} />
    </View>
  );
}



