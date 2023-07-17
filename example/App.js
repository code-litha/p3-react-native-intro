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
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Internal server error");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const PostItem = ({ item }) => {
    return (
      <View style={{ flex: 1, margin: 5, backgroundColor: "white" }}>
        <Text style={{ marginBottom: 5 }}>{item?.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.boxWhite}>
        <View
          style={{
            // backgroundColor: "green",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://mustopa28121992.github.io/projectt/img/fox--md5--a9e377ae39495073d0e66db163fc8d9b.png",
            }}
            style={{ width: "100%", height: "100%" }}
            resizeMode={"contain"}
          />
        </View>
        <View style={{ backgroundColor: "orange", flex: 3, padding: 20 }}>
          <Text style={{ fontSize: 15 }}>
            95% Lulusan Dapat Kerja dalam 3 Bulan;
          </Text>
          <Text style={{ fontSize: 12 }}>
            Jadilah bagian dari 1600+ lulusan yang sukses menjadi talenta
            digital siap kerja.
          </Text>
        </View>
      </View>
      <View style={[styles.boxBlue, { backgroundColor: "white", padding: 20 }]}>
        <ScrollView>
          {posts?.map((post) => (
            <Text key={post?.id} style={{ marginBottom: 5 }}>
              - {post?.title}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.boxRed}>
        <FlatList
          data={posts}
          renderItem={PostItem}
          keyExtractor={(item) => item?.id}
        />
      </View>
      {/* <Text>Hello world!</Text> */}
      {/* <Button
        title="Learn More"
        onPress={() => {
          console.log("test");
        }}
      />
      <Image
        style={{
          width: "60%",
          height: 100,
          marginTop: 10,
          backgroundColor: "red",
        }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
        resizeMode={"contain"}
      />
      <StatusBar style="auto" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: 20,
  },
  boxBlue: {
    flex: 2,
    backgroundColor: "blue",
  },
  boxWhite: {
    padding: 10,
    flexDirection: "row",
    flex: 1,
    backgroundColor: "white",
  },
  boxRed: {
    flex: 2,
    backgroundColor: "red",
    padding: 10,
  },
});
