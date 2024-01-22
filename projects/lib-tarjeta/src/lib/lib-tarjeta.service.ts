import { Injectable } from '@angular/core';
import { ICharacter } from './classes/character';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibTarjetaService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<HttpResponse<ICharacter[]>> {
    return this.http
      .get<Array<ICharacter>>("https://rickandmortyapi.com/api/character/?page=1", {
        observe: 'response', headers: {
          'Content-Type': 'application/json'
        }
      });
  }
}
