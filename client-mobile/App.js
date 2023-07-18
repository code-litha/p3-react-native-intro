import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import Profile from "./components/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchPosts();
  }, []);
  // console.log(posts, "<<<");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          flexDirection: "row",
          // width: "70%",
        }}
      >
        <View style={{ width: "30%" }}>
          <Image
            style={{ width: 120, height: 120 }}
            source={{
              uri: "https://itechmagz.id/wp-content/uploads/2023/06/hacktiv8_logo_center.png",
            }}
            resizeMode={"contain"}
          />
        </View>
        <View style={{ width: "70%", padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            95% Lulusan Dapat Kerja dalam 3 Bulan
          </Text>
          <Text style={{ fontSize: 11 }}>
            1600+ lulusan sukses jadi talenta digital dengan gaji di atas
            standar industri. Dapatkan diskon Rp2 juta untuk dapatkan skill
            impianmu!
          </Text>
        </View>
      </View>
      <View style={{ flex: 3, backgroundColor: "skyblue" }}>
        <ScrollView style={{ flex: 1 }}>
          {posts.map((post) => (
            <Text key={post.id}> - {post.title}</Text>
          ))}
        </ScrollView>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={posts}
          // renderItem={({ item }) => {
          //   return <Text style={{ marginBottom: 10 }}> - {item.title} </Text>;
          // }}
          renderItem={({ item }) => <Post post={item}></Post>}
          keyExtractor={(item) => item.id}
        />
      </View>
      {/* <Profile />
      <Text>
        Expo tries to manage as much of the complexity of building apps for you
        as we can, which is why we call it the managed workflow. A developer
        using the managed workflow doesn't use Android Studio or Xcode often
        (although it may be useful for debugging), they write JavaScript code
        and manage configuration, such as the app icon and splash screen,
        through app config — app.json/app.config.js or config plugins. The Expo
        SDK exposes an increasingly comprehensive set of APIs that give you the
        power to access device capabilities like the camera, biometric
        authentication, file system, haptics, and so on. Developers can also
        make use of most libraries available in the React Native ecosystem.
      </Text>
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "pink",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
