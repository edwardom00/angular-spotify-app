import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit{
  @Input() title: string;
  constructor(){
    this.title = '';
  }

  ngOnInit(): void {
    console.log('Title:', this.title);
  }
}
