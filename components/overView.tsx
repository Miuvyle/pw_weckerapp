import React, {useState} from 'react';
import { Switch, TouchableOpacity, Text, View, StyleSheet } from "react-native";
export function TblO({givenTime}) {
  const [count, setCount] = useState(0)
	return(
		<>
	<TouchableOpacity style={style.button}
	>
	<View style={style.norm}>
	<Text style={style.clock}>{givenTime}</Text>
	</View>
	</TouchableOpacity>
	</>
	);
};

const style = StyleSheet.create({
	button: {
//		padding: 10,
		borderRadius: 10,
		padding: 20,
		borderWidth: 0,
		width: 300,
		height: 100,
		borderColor: '#222222',
		backgroundColor: '#222222',
	},
	norm: {
		
	},
	clock: {
  		color: '#FFF',
                fontSize: 40,
	},
})
 /* return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => {
          setCount(count + 1)
        }}
      >
        <Text style={styles.text}>Press me!</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{`Pressed ${count} times`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'lightgreen',
  },
  text: {
    fontSize: 18,
    padding: 12,
  },
})
export default function Hihi =  {
	return(
	<TouchableOpacity style={styles.button}
	>
	<View style={style.norm}>
	<Text style={style.clock}>America ya</Text>
	</View>
	</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	button: {
		backgroundColor: '#25292',
		alignItems: 'center',
		
	},
	norm: {
		width: 200,
		height: 100,
		backroundColor: '#a9a9a9',

	},
	clock: {
  		color: '#FFA500',
                fontSize: 30,
                justifyContent: 'center',
                marginHorizontal: 20,
                marginVertical: 10,
	},
});*/
