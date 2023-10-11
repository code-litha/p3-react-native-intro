import { Text, View } from "react-native";

export default function Photo({ photo }) {
  return (
    <View style={{ flex: 1, flexDirection: "row", margin: 10 }}>
      <Text>- {photo.title}</Text>
    </View>
  );
}
