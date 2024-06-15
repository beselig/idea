import { UserResponse } from "@supabase/supabase-js";
import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "./useSupabase";

export function useAuth() {
  const { supabase: _supabase, signIn, signOut } = useSupabase();

  const userQuery = useQuery<UserResponse, Error>({
    queryKey: ["auth", "user"],
    queryFn() {
      return _supabase.auth.getUser();
    },
  });

  return {
    userQuery,
    signIn,
    signOut,
  };
}
