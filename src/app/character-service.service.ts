import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character, ICharacter } from './classes/character';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CharacterServiceService {

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
