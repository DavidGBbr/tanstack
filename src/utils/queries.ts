import { useQuery } from "@tanstack/react-query";
import { getPost, getPosts } from "./api";

export const usePosts = () => {
  const query = useQuery({
    networkMode: "online",
    queryKey: ["posts"],
    queryFn: getPosts,
    staleTime: Infinity,
  });
  return query;
};

export const usePost = (id: number) => {
  useQuery({ queryKey: ["posts", id], queryFn: () => getPost(id) });
};
