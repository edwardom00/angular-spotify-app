import { Component, OnInit } from '@angular/core';
//Importamos la data tracks.json como dataRaw
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit{
  //Añadimos el array mockTracksList
  mockTracksList = [

    ]
    constructor() { 

    }
  ngOnInit(): void {
    // usamos el dataRaw importado 
    const { data }: any =(dataRaw as any).default
    this.mockTracksList = data
  }
  }
