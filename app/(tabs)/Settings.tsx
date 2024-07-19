import { Text, View, TouchableOpacity, StyleSheet } from "react-native";



function americaYa() {

  console.log("HAAAAAALO")
}

export default function Setting() {

  return (
    <View style={baseStyle.container}>
      <TouchableOpacity onPress={americaYa} activeOpacity={0.5}>
        <Text style={baseStyle.button}>Hallo du Uhren-Dude</Text>
      </TouchableOpacity>
    </View>


  );


}




const baseStyle = StyleSheet.create({


  container:
  {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
  },

  button: {

    backgroundColor: "black",
    color: "white"
  }



})
