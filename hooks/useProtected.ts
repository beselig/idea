import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "expo-router";

export function useProtected() {
  const { userQuery } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userQuery.isFetched && !userQuery.data?.data.user)
      router.replace("/signin");
  }, [userQuery.data, userQuery.isFetched]);

  return userQuery.isFetching;
}
