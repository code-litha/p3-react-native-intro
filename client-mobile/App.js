import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("error nih");
      }
      const responseJSON = await response.json();
      setPosts(responseJSON);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(posts, "<<< post");
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <View style={styles.container}>
          <Text style={[styles.heading, styles.textUnderline]}>
            Hacktiv8 Phase 3
          </Text>
          <Button
            title="Click me"
            onPress={() => {
              console.log("button di click");
            }}
            style={{ color: "pink" }}
          />
          <StatusBar style="auto" />
        </View> */}
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={{ flex: 1, backgroundColor: "white" }}>
              <Image
                source={{
                  uri: "https://reactnative.dev/img/tiny_logo.png",
                }}
                style={{ height: "100%", width: "100%", resizeMode: "contain" }}
              />
            </View>
            <View style={{ flex: 2 }}>
              <Text style={styles.heading}>Hacktiv8 Phase 3</Text>
            </View>
          </View>
          <View style={{ flex: 3, backgroundColor: "tomato" }}>
            <ScrollView>
              {posts.map((post, index) => (
                <Text key={post.id} style={{ margin: 10, fontSize: 20 }}>
                  {index} - {post.title}
                </Text>
              ))}
            </ScrollView>
          </View>
          <View style={{ flex: 3, backgroundColor: "pink" }}>
            <FlatList
              data={posts}
              renderItem={({ item, index }) => {
                return (
                  <Text style={{ margin: 10, fontSize: 20 }}>
                    {" "}
                    {index} - {item.title}
                  </Text>
                );
              }}
              keyExtractor={(item) => item.id}
              // horizontal
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
    backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    // color: "red",
  },
  textUnderline: {
    textDecorationLine: "underline",
  },
});
