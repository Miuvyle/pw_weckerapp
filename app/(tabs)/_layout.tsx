import { Stack } from "expo-router";
import HomeScreen from ".";




export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="Wecker"
        //component={HomeScreen}
        options={{ title: 'Wecker' }}
      />
    </Stack>
  );
}
