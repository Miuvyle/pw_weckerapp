import React, { useState } from 'react';
import { Link ,useRouter} from 'expo-router';
import { Switch, TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";

export function TouchableComponent({ currentState, givenTime, href, currentKey, onToggleSwitch }) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <View style={style.container}>
          <Link href={href} style={style.clock}>{givenTime}</Link>
        </View>
      </TouchableOpacity>
      <SwitchComponent
        style={style.toggle}
        alarmIndex={currentKey}
        onToggleSwitch={onToggleSwitch}
        currentState={currentState}
      />
    </View>
  );
};

export function SwitchComponent({ alarmIndex, onToggleSwitch, currentState }) {
  const toggleSwitch = () => {
    onToggleSwitch();
  };

  return (
    <>
      <Switch
        trackColor={{ false: '#C7C7A6', true: '#a49966' }}
        style={style.toggle}
        onValueChange={toggleSwitch}
        value={currentState}
        thumbColor={currentState ? '#79b791' : '#abd1b5'}
      />
    </>
  );
};

export function AddButton(){
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.push({ pathname: '(tabs)/Settings' })} >
      <View styles={style.createButton}>
        <Image styles={style.img} source={require('../assets/images/plusIcon.png')}/>
      </View>
    </TouchableOpacity>
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
    borderRadius: 100,
    position: 'absolute',
    top: 0,

  },
  container: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    padding: 5,
  },

  clock: {
    color: '#EAFFDA',
    fontSize: 40,
    alignSelf: 'stretch',
    flexGrow: 1,
  },
  img: {
    borderRadius: 100,
  },

  toggle: {
    marginLeft: 200,
    height: 40,
    position: 'absolute',
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]
  },
})
