import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log(posts, "<<< posts");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          {/* <Text
            style={[
              styles.headerText,
              styles.styleText,
              {
                color: "blue",
              },
            ]}
          >
            Hacktiv8 Phase 3!
          </Text>
          <Text>Introduction React Native</Text>
          <Button
            title="Press Me"
            onPress={() => {
              console.log("button di click");
            }}
          />
          <StatusBar style="auto" /> */}
          <View
            style={{ flex: 1, backgroundColor: "orange", flexDirection: "row" }}
          >
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
              <Image
                style={{
                  width: 150,
                  height: 120,
                  resizeMode: "center",
                }}
                source={{
                  uri: "https://east.vc/wp-content/uploads/2020/01/hacktiv8-1.png",
                }}
              />
            </View>
            <View style={{ flex: 2, backgroundColor: "orange" }}>
              <View style={{ padding: 10 }}>
                <Text
                  style={[
                    styles.headerText,
                    styles.styleText,
                    {
                      color: "blue",
                    },
                  ]}
                >
                  Hacktiv8 Phase 3!
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: "pink" }}>
            <ScrollView>
              {posts.map((post) => (
                <Text key={post.id} style={{ marginBottom: 10 }}>
                  {" "}
                  - {post.title}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "yellow" }}>
            <FlatList
              data={posts}
              renderItem={({ item }) => {
                return (
                  <Text style={{ marginBottom: 10 }}> - {item.title}</Text>
                );
              }}
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
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30, // 30 dpi dot per inch
  },
  styleText: {
    color: "red",
    textDecorationLine: "underline",
  },
});
