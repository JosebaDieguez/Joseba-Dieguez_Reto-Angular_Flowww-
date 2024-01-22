import { Component, OnInit } from '@angular/core';
import { LibTarjetaService } from './lib-tarjeta.service';
import { Character } from './classes/character';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'lib-libTarjeta',
  templateUrl: './lib-tarjeta.component.html',
  styleUrl: './lib-tarjeta.component.css'
})
export class LibTarjetaComponent implements OnInit {
  showFav = false;

  setFavorito() {
    if (this.showFav) {
      this.showFav = false;
    } else {
      this.showFav = true;
    }
  }
  characters: any = {};
  character: Character;
  constructor(
    private servicio: LibTarjetaService) {
  }

  ngOnInit() { 
    this.servicio.getCharacters().subscribe({
      next: (data: HttpResponse<Array<Character>>) => {
        this.characters = data.body;
        this.character = this.characters.results[0];
        // document.getElementById('characterImage').setAttribute('style','background: url("' + this.character.image +'"), lightgray 50% / cover no-repea');
        console.log(this.character);
      },
      error: (err) => {
        this.characters = [];
      },
    });
  }

}
