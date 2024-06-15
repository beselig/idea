import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import React, { useRef, useState } from "react";
import { StyleSheet, TextInput, useColorScheme, View } from "react-native";

type AddIdeaProps = {};

export function AddIdea({}: AddIdeaProps) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme as "dark" | "light"];

  const [title, setTitle] = useState("");
  const inputRef = useRef<TextInput>(null);

  function submit() {
    console.log("TODO: submit title to DATA", title);
    setTitle("");
  }

  function focusInput() {
    if (!title) inputRef.current?.focus();
    else {
      submit();
      inputRef.current?.blur();
    }
  }

  return (
    <View
      style={{
        backgroundColor: Colors[colorScheme as "dark" | "light"].primary[950],
        borderRadius: 24,
        display: "flex",
        gap: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderColor: "rgba(255, 255, 255, 0.1)",
        borderWidth: 1,
      }}
    >
      <TextInput
        ref={inputRef}
        style={styles.text}
        onChangeText={setTitle}
        // onBlur={submit}
        onSubmitEditing={submit}
        value={title}
        placeholder="I've got an idea ..."
      />
      <Ionicons
        name="add-circle-sharp"
        size={32}
        color={Colors.primary[500]}
        onPress={focusInput}
      />
    </View>
  );
}

// 1. Type title
// 2. onBlur or onIconClick: open IdeaDetails (Animate AddIdea with SharedElement to the IdeaDetails)
// 3. Save idea
// TODO: implement IdeaDetails

const styles = StyleSheet.create({
  text: { fontSize: 24, color: Colors.primary[500] },
  icon: { color: Colors.primary[500] },
});
