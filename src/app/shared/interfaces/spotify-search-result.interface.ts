export interface ISpotifySearchResult {
  albums?: {};
  artists?: {};
  tracks?: {};
}

export interface ISpotifyAlbumsData {
  images: [];
  name: string;
  album_type: string;
  release_date: string;
  external_urls: {
    spotify: string;
  }
}

export interface ISpotifyArtistsData {
  images: [];
  name: string;
  followers:{
    total: number;
  };
  popularity: number;
  external_urls: {
    spotify: string;
  }
}

export interface ISpotifyTracksData {
  name: string;
  preview_url?: string;
  popularity?: number | undefined;
  album: {
    name: string | null;
  };
  external_urls?: {
    spotify?: string;
  }
}
