import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Switch, TouchableOpacity, Text, View, StyleSheet } from "react-native";
export function TouchableComponent({ givenTime }){
  const [count, setCount] = useState(0)
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Link href="/Settings" style={style.clock}>{givenTime}</Link>
      </TouchableOpacity>
      <SwitchComponent/>
    </View>
  );
};

export function SwitchComponent() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <>
      <Switch
        trackColor={{ false: '#abd1b5', true: '#79b791' }}
        style={style.toggle}
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={isEnabled ? '#a49966' : '#C7C7A6'}
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
    alignItens: 'center',
  },

  container: {
    justifyContent: 'center',
    alignItens: 'center',
  },

  clock: {
    color: '#EAFFDA',
    fontSize: 40,
  },

  toggle: {
    marginLeft: 200,
    height: 40,
    position: 'absolute',
    top: 30,
  },
})
