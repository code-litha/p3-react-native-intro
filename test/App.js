import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import styles from "./assets/styles";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Photo from "./components/Photo";

export default function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const responseJSON = await response.json();
      setData(responseJSON);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(data);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{ flex: 1, backgroundColor: "orange", flexDirection: "row" }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2020/01/15094433/hacktiv8-1.png",
                }}
                style={styles.image}
              />
            </View>
            <View style={{ flex: 2.5, padding: 10 }}>
              <Text style={styles.heading}>Hacktiv8 </Text>
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: "pink" }}>
            <ScrollView>
              {data.map((photo, index) => (
                <Photo key={index} photo={photo} />
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "tomato" }}>
            <FlatList
              data={data}
              renderItem={({ item }) => {
                return <Photo photo={item} />;
              }}
              // keyExtractor={(item) => item.id}
              keyExtractor={(item, index) => index}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//     height: 100,
//     width: 100, // 100 dpi
//   },
//   box: {
//     borderWidth: 5,
//     borderColor: "black",
//   },
// });
