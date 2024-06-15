import { useQuery } from "@tanstack/react-query";
import { useSupabase } from "./useSupabase";

export const ideasQueryKey = ["ideas"];
export function useIdeasQuery() {
  const { supabase } = useSupabase();

  const ideasQuery = useQuery({
    queryKey: ideasQueryKey,
    queryFn() {
      const { data: ideas, error } = supabase.from("ideas");
    },
  });
  return ideasQuery;
}
