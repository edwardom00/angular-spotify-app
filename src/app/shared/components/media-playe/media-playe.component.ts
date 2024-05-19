import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-media-playe',
  templateUrl: './media-playe.component.html',
  styleUrls: ['./media-playe.component.css'],
})
export class MediaPlayeComponent implements OnInit{
  //Actualizamos el mockCover con el TrackModel
  mockCover: TrackModel = {
  cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
  album: 'Gioly & Assia',
  name: 'BEBE (Oficial)',
  //Se añade el url y  el _id
  url: 'http://localhost/track.mp3',
  _id: 1
  }

  listObservers$: Array<Subscription> = [] //Se define la lista ya que pueden haber muchos observers
  constructor(private multimediaService : MultimediaService) { } //Agregamos el multimediaService

  ngOnInit(): void { //Se crea la constante para la subscripcion con el multimediaService
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo cancion...', response);
      }
    )
      this.listObservers$ = [observer1$]
  }

}

  
