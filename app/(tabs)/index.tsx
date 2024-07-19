import { Text, View } from "react-native";
import { TouchableComponent } from "@/components/overView"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#363020'
      }}>
      <TouchableComponent
        givenTime="19:05" />
    </View>
  );
}
