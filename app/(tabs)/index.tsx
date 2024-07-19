import { Text, View } from "react-native";
import { TblO, Swch } from "@/components/overView"

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#363020'
      }}
    >
      <TblO
        givenTime="19:05"
      />
      <Swch />
    </View>
  );
}
