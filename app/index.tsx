import { Text, View } from "react-native";
import {TblO} from "@/components/overView.tsx"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <TblO 
    givenTime = "19:05"/>
    </View>
  );
}
