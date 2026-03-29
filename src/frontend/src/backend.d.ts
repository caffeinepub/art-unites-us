import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Artist {
    id: bigint;
    bio: string;
    name: string;
    photoUrl: string;
    specialty: string;
}
export interface Exhibition {
    id: bigint;
    title: string;
    endDate: Time;
    description: string;
    imageUrl: string;
    location: string;
    startDate: Time;
}
export type Time = bigint;
export interface Artwork {
    id: bigint;
    title: string;
    year: bigint;
    description: string;
    imageUrl: string;
    artist: string;
    medium: string;
}
export interface backendInterface {
    addArtist(artist: Artist): Promise<bigint>;
    addArtwork(artwork: Artwork): Promise<bigint>;
    addExhibition(exhibition: Exhibition): Promise<bigint>;
    getAllArtists(): Promise<Array<Artist>>;
    getAllArtworks(): Promise<Array<Artwork>>;
    getAllExhibitions(): Promise<Array<Exhibition>>;
    getAllExhibitionsSortedByDate(): Promise<Array<Exhibition>>;
    getArtist(artistId: bigint): Promise<Artist>;
    getArtwork(artworkId: bigint): Promise<Artwork>;
    getExhibition(exhibitionId: bigint): Promise<Exhibition>;
}
