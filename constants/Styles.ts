import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    display: "flex",
    gap: 16,
    padding: 16,
  },
  link: {
    color: Colors.primary[500],
  },
  input: {
    borderRadius: 16,
    padding: 16,
  },
  button: {
    backgroundColor: Colors.primary[500],
    color: "white",
    padding: 16,
    fontSize: 20,
    textAlign: "center",
    borderRadius: 10000,
  },
});
