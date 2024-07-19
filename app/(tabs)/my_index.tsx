import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/Settings">Click me please </Link>
    </View>
  );
}
