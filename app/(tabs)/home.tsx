import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Models } from "react-native-appwrite";

const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[
          {
            $id: "1",
          },
          {
            $id: "2",
          },
          {
            $id: "3",
          },
        ]}
        keyExtractor={(item: { $id: string }) => item.$id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg mt-3">
            <Text>{item.$id}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
