import { Stack } from "expo-router";
export default function TabsLayout() {
  return (
    <Stack  >
      <Stack.Screen name="index" options={{ headerShown: false, statusBarColor: '#363020' }}/>
      <Stack.Screen name="Settings" options={{ headerShown: false, statusBarColor: ' #363020'}} />
    </Stack>
  );
}
