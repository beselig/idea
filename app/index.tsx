import { AddIdea } from "@/components/AddIdea";
import { Idea } from "@/components/Idea";
import { useIdeasQuery } from "@/hooks/useIdeasQuery";
import { FlatList, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const {} = useIdeasQuery();

  if (validatingAuth) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,

          paddingTop: 16,
          paddingBottom: 16,
          paddingRight: 16,
          paddingLeft: 16,
          gap: 16,
        }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <FlatList
          contentContainerStyle={{
            flexDirection: "column",
            display: "flex",
            gap: 16,
          }}
          data={DATA}
          renderItem={({ item }) => <Idea item={item} />}
        />
        <AddIdea />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
