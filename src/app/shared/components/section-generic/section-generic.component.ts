import { Component, Input, OnInit} from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit{
  @Input() title: string;
  @Input() mode: 'small' | 'big' = 'big' //Agregamos el mode
  @Input() dataTracks: Array<TrackModel> = [] //Agregamos el array datatracks<TrackModels>
  constructor(){
    this.title = '';
  }

  ngOnInit(): void {
    //console.log('Title:', this.title);
  }
}
