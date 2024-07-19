import React from "react";
import WheelPickerExpo from "react-native-wheel-picker-expo";


export function TimePicker(timePick: number) {
  const n = timePick
  const myTime = new Array(n).fill(null).map((_, i) => i + 1);

  console.log(myTime)
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




