//Importamos el modelos de Artist
import { ArtistModel } from "./artist.model";

//Interface de TrackModel
export interface TrackModel {
    name: string;
    album: string;
    cover: string;
    url: string;
    _id: string | number;
    artist?: ArtistModel;
    }
    