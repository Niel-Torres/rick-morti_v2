import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: false
})
export class CharacterCardComponent  implements OnInit {

  @Input() image?: string;
  @Input() name?: string;
  @Input() origin?: string;
  @Input() location?: string;


  constructor() { }

  ngOnInit() {
  }

}
