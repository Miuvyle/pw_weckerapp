import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Switch, TouchableOpacity, Text, View, StyleSheet } from "react-native";

export function TouchableComponent({ givenTime }){
  const [count, setCount] = useState(0)
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <View style={style.container}>
     	<Link href="/Settings" style={style.clock}>{givenTime}</Link>
	</View>
     </TouchableOpacity>
      <SwitchComponent/>
    </View>
  );
};
/*export function CreateButton() {
  return(
    <>
    <TouchableOpacity style={style.container}>
        <View style={style.createButton}>
     	<Link href="/Settings">ADD</Link>
	</View>
     </TouchableOpacity>
     </>
  )
}*/

export function SwitchComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Switch
        trackColor={{ false: '#C7C7A6', true: '#a49966' }}
        style={style.toggle}
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={isEnabled ? '#79b791' : '#abd1b5'}
      />
    </>
  );
};

const style = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 20,
    borderWidth: 0,
    width: 300,
    height: 100,
    backgroundColor: '#605C4E',
    justifyContent: 'center',
  },
  createButton: {
   },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  clock: {
    color: '#EAFFDA',
    fontSize: 40,
    alignSelf: 'stretch',
    flexGrow: 1,
  },

  toggle: {
    marginLeft: 200,
    height: 40,
    position: 'absolute',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
})
