import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from './character-service.service';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Character, ICharacter } from './classes/character';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  characters: any = {};
  constructor(
    private servicio: CharacterServiceService) {
  }

  ngOnInit() {
    this.servicio.getCharacters().subscribe({
      next: (data: HttpResponse<Array<Character>>) => {
        this.characters = data.body;
        console.log(data.body);
      },
      error: (err) => {
        this.characters = [];
      },
    });
  }
  title = 'pruebaFlowww';
  showFav = false;

  setFavorito() {
    if (this.showFav) {
      this.showFav = false;
    } else {
      this.showFav = true;
    }
  }
}
