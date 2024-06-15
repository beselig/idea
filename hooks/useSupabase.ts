import { Database } from "@/supabase";
import {
  AuthTokenResponsePassword,
  SignInWithPasswordCredentials,
  createClient,
} from "@supabase/supabase-js";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_KEY;
const supabase = createClient<Database>(
  supabaseUrl as string,
  supabaseKey as string,
);

export function useSupabase() {
  const queryClient = useQueryClient();

  // TODO: do I need to handle this potential error or does it just crash the app?
  const signIn = useMutation<
    AuthTokenResponsePassword,
    Error,
    SignInWithPasswordCredentials
  >({
    async mutationFn(variables) {
      if ("email" in variables) {
        return supabase.auth.signInWithPassword({
          email: variables.email!,
          password: variables.password,
        });
      }

      throw new Error("SignIn without email not supported");
    },
  });

  const signOut = useMutation({
    mutationFn() {
      return supabase.auth.signOut();
    },
    onSuccess() {
      queryClient.clear();
    },
  });

  return { supabase, signIn, signOut };
}
