import { Character } from '../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Killin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    },
  ]

  addNewCharacter(character: Character) {
    const newCharacter: Character = {...character, id: uuid() };
    this.characters.push(newCharacter)
  }

  deleteCharacterById(id: string){

    this.characters.forEach((character, i) => {
      if(character.id === id){
        console.log(character);
        this.characters.splice(i, 1);
      }
    });
  }

  getCharacters(){
    return this.characters;
  }
}
