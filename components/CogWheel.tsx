import React from "react";
import WheelPickerExpo from "react-native-wheel-picker-expo";


export function TimePicker({ timePick }) {

  let myTime = Array.from({ length: timePick }, (v, k) => k);
  return (
    <WheelPickerExpo
      height={300}
      width={150}
      initialSelectedIndex={3}
      items={myTime.map(name => ({ label: name, value: '' }))}
      onChange={({ item }) => console.log(item.label)}
      haptics={true}
      backgroundColor="#000000"
    />

  )

}




