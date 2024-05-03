import { Component } from '@angular/core';

@Component({
  selector: 'app-media-playe',
  templateUrl: './media-playe.component.html',
  styleUrls: ['./media-playe.component.css'],
})
export class MediaPlayeComponent {
  mockCover: any = {
  cover: 'https://lastfm.freetls.fastly.net/i/u/300x300/1a1cc9431ffacc1b7be877d61975dfc8.jpg',
  album: 'Gioly & Assia',
  name: 'BEBE (Oficial)'
  }

constructor() { }
  ngOnInit(): void {
  }
}
  
