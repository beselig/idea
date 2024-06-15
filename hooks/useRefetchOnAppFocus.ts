import { focusManager } from "@tanstack/react-query";
import { useEffect } from "react";
import { AppStateStatus, Platform, AppState } from "react-native";

/**
 * @warning Only use this once inside the app!
 */
export function useRefectOnAppFocus() {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);
}
