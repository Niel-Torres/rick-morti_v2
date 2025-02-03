import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  characters: any[] = [];
  params = {} as any;

  constructor(
    private rickAndMortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters()
  }

  //Obtener personajes
  getCharacters(event?: any){
    this.params.page +=1;
    this.rickAndMortySvc.getCharacters(this.params).subscribe({
      next: (res: any) => {

        this.characters.push(...res.results) //Spread Operator "..." es un operador que simplifica la recogida de valores en una estructura de datos, distribuye los elementos dentro de un iterable (cadena de texto, array o cualquier cosa que se pueda recorrer) dentro de un receptor
        console.log(this.characters);

         //Si existe un evento, se marca como evento completado para que siga cargando la siguiente tanda de personajes
         if(event) event.target.complete(); 
      },
      error: (error: any) => {
        if(event) event.target.complete();
      }
    })
  }
}
