import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { TimePicker } from '@/components/CogWheel'


function americaYa() {

  console.log("HAAAAAALO")
}

export default function Setting() {
  return (
    <View style={baseStyle.container}>
      <TimePicker
        timePick={24}
      />
      <View style={baseStyle.divider}>
      </View>
      <TimePicker
        timePick={60}
      />
    </View>


  );


}




const baseStyle = StyleSheet.create({


  container:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#363020",
    flexDirection: "row"
  },

  button: {

    backgroundColor: "black",
    color: "white"
  },

  divider: {

    color: "white",
    width: 10,
    height: 100,
    margin: 20,
  }



})
