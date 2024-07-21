import { Stack } from "expo-router";
export default function TabsLayout() {
  return (
    <Stack  >
      <Stack.Screen name="index"/>
      <Stack.Screen name="Settings" options={{ headerShown: false, statusBarColor: 'black' }} />
    </Stack>
  );
}
