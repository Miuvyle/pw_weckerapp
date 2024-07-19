import React, { useState } from 'react';
import { Link } from 'expo-router';
import { Switch, TouchableOpacity, Text, View, StyleSheet } from "react-native";
export function TblO({ givenTime }, { toggle }) {
  const [count, setCount] = useState(0)
  return (
    <>
      <TouchableOpacity style={style.button}
      >
        <View style={style.norm}>
          <Link href="/Settings" style={style.clock}>{givenTime}</Link>
          {toggle}
        </View>
      </TouchableOpacity>
    </>
  );
};

export function Swch() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  console.log(`Initial isEnabled state: ${isEnabled}`);
  return (
    <>
      <Switch
        trackColor={{ false: '#abd1b5', true: '#79b791' }}
        style={style.toggle}
        onValueChange={toggleSwitch}
        value={isEnabled}
        thumbColor={isEnabled ? 'red' : 'yellow'}

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
  },
  norm: {

  },
  clock: {
    color: '#C7C7A6',
    fontSize: 40,
  },
  toggle: {
    height: 40,
  },
})
