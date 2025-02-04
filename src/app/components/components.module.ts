import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CharacterCardComponent } from './character-card/character-card.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations:[
    CharacterCardComponent
  ],
  exports:[
    CharacterCardComponent
  ],
})
export class ComponentsModule { }
