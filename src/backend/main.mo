import Time "mo:core/Time";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Artwork = {
    id : Nat;
    title : Text;
    artist : Text;
    medium : Text;
    year : Int;
    description : Text;
    imageUrl : Text;
  };

  type Artist = {
    id : Nat;
    name : Text;
    bio : Text;
    photoUrl : Text;
    specialty : Text;
  };

  type Exhibition = {
    id : Nat;
    title : Text;
    description : Text;
    startDate : Time.Time;
    endDate : Time.Time;
    location : Text;
    imageUrl : Text;
  };

  module Exhibition {
    public func compare(ex1 : Exhibition, ex2 : Exhibition) : Order.Order {
      Text.compare(ex1.title, ex2.title);
    };
  };

  var nextArtworkId = 9;
  var nextArtistId = 5;
  var nextExhibitionId = 4;

  let artworks = Map.empty<Nat, Artwork>();
  let artists = Map.empty<Nat, Artist>();
  let exhibitions = Map.empty<Nat, Exhibition>();

  public shared ({ caller }) func addArtwork(artwork : Artwork) : async Nat {
    let newId = nextArtworkId;
    let newArtwork : Artwork = {
      artwork with id = newId;
    };
    artworks.add(newId, newArtwork);
    nextArtworkId += 1;
    newId;
  };

  public shared ({ caller }) func addArtist(artist : Artist) : async Nat {
    let newId = nextArtistId;
    let newArtist : Artist = {
      artist with id = newId;
    };
    artists.add(newId, newArtist);
    nextArtistId += 1;
    newId;
  };

  public shared ({ caller }) func addExhibition(exhibition : Exhibition) : async Nat {
    let newId = nextExhibitionId;
    let newExhibition : Exhibition = {
      exhibition with id = newId;
    };
    exhibitions.add(newId, newExhibition);
    nextExhibitionId += 1;
    newId;
  };

  public query ({ caller }) func getArtwork(artworkId : Nat) : async Artwork {
    switch (artworks.get(artworkId)) {
      case (null) { Runtime.trap("Artwork not found") };
      case (?artwork) { artwork };
    };
  };

  public query ({ caller }) func getArtist(artistId : Nat) : async Artist {
    switch (artists.get(artistId)) {
      case (null) { Runtime.trap("Artist not found") };
      case (?artist) { artist };
    };
  };

  public query ({ caller }) func getExhibition(exhibitionId : Nat) : async Exhibition {
    switch (exhibitions.get(exhibitionId)) {
      case (null) { Runtime.trap("Exhibition not found") };
      case (?exhibition) { exhibition };
    };
  };

  public query ({ caller }) func getAllArtworks() : async [Artwork] {
    artworks.values().toArray();
  };

  public query ({ caller }) func getAllArtists() : async [Artist] {
    artists.values().toArray();
  };

  public query ({ caller }) func getAllExhibitions() : async [Exhibition] {
    exhibitions.values().toArray().sort(); // Uses default compare by title
  };

  public query ({ caller }) func getAllExhibitionsSortedByDate() : async [Exhibition] {
    let compareByDate = func(ex1 : Exhibition, ex2 : Exhibition) : Order.Order {
      if (ex1.startDate < ex2.startDate) { #less } else if (ex1.startDate > ex2.startDate) { #greater } else {
        #equal;
      };
    };

    exhibitions.values().toArray().sort(compareByDate);
  };
};
