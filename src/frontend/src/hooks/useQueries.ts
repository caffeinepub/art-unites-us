import { useQuery } from "@tanstack/react-query";
import type { Artist, Artwork, Exhibition } from "../backend.d";
import { useActor } from "./useActor";

export function useGetAllArtworks() {
  const { actor, isFetching } = useActor();
  return useQuery<Artwork[]>({
    queryKey: ["artworks"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArtworks();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllArtists() {
  const { actor, isFetching } = useActor();
  return useQuery<Artist[]>({
    queryKey: ["artists"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllArtists();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAllExhibitions() {
  const { actor, isFetching } = useActor();
  return useQuery<Exhibition[]>({
    queryKey: ["exhibitions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllExhibitions();
    },
    enabled: !!actor && !isFetching,
  });
}
