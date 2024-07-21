import React, { useState } from "react";
import { Alert, Image } from "react-native";
import WheelPickerExpo from "react-native-wheel-picker-expo";
import { Switch, TouchableOpacity, Text, View, StyleSheet } from "react-native";


export function TimePicker({ timePick, onTimeChange }) {
  let myTime = Array.from({ length: timePick }, (v, k) => k);
  return (
    <WheelPickerExpo
      height={300}
      width={150}
      initialSelectedIndex={3}
      items={myTime.map(name => ({ label: name.toString(), value: '' }))}
      onChange={({ item }) => onTimeChange(item.label)}
      haptics={true}
      backgroundColor='#605C4E'
    />

  )

}

function returnAValue(item) {
  const label = item.label

  return console.log(label)
}
export function SaveButton() {
  return (
    <>
      <TouchableOpacity>
        <View>
          <Text>Save</Text>
        </View>
      </TouchableOpacity>
    </>
  )
}


