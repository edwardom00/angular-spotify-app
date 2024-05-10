import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{
  //Añadimos el track con el array TrackModel
  tracks: TrackModel[] = []
  constructor() { }
  ngOnInit(): void {
    //Usamos el dataRaw que importamos
  const {data}: any = (dataRaw as any).default
  this.tracks = data;
}
}
