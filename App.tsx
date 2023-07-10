import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white relative">
      <View className="bg-black w-screen h-20 absolute top-9 justify-center items-center">
        <Text className="text-2xl text-white">#Header</Text>
      </View>
      <Text className="text-2xl">hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}
