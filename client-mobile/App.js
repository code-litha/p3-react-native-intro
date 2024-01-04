import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "<<< data");
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Text style={styles.heading}>Hacktiv8 Phase 3</Text>
          <Text>Introduction React Native</Text>
          <Button
            title={`Button Nih di ${Platform.OS}`}
            onPress={(event) => {
              // console.log(event, "<<< event");
              console.log("button nih ke press");
            }}
          />
          <StatusBar style="auto" /> */}

          <View
            style={{ flex: 1, backgroundColor: "orange", flexDirection: "row" }}
          >
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                }}
                source={{
                  uri: "https://east.vc/wp-content/uploads/2020/01/hacktiv8-1.png",
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: "yellow" }}>
              <View style={{ padding: 20 }}>
                <Text style={[styles.heading, { fontStyle: "italic" }]}>
                  Hacktiv8
                </Text>
                <Text>Lorem ipsum bla bla bla</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: "pink" }}>
            <ScrollView>
              {posts.map((post) => (
                <Text key={post.id} style={{ fontSize: 15, margin: 5 }}>
                  {" "}
                  - {post.title}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "teal" }}>
            <FlatList
              data={posts}
              renderItem={({ item }) => (
                <Text style={{ fontSize: 15, margin: 5 }}> - {item.title}</Text>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
    // alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 20, // dpi dot per inch
    fontWeight: "bold",
  },
});
