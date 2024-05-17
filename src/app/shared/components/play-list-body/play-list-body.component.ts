import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrl: './play-list-body.component.css'
})
export class PlayListBodyComponent implements OnInit{
  //NUEVO Añadimos el track con el array TrackModel
  tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string} = { property: null, order: 'asc'}
  constructor() { }
  ngOnInit(): void {
    //Usamos el dataRaw que importamos
  const {data}: any = (dataRaw as any).default
  this.tracks = data;
}
//NUEVO Se agrega la funcion changeSort para ordenar nombres, albuns
changeSort(property: string): void{
  const {order} = this.optionSort
  this.optionSort = {
    property,
    order: order === 'asc' ? 'desc' : 'asc'
  }

}
}
