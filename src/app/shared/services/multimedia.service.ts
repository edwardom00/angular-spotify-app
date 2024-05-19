import { Injectable, EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>() //se agrega la variable para poder suscribirnos(escuchar la cancion)
  constructor() { }
}

