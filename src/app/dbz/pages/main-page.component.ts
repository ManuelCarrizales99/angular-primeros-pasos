import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  characters: Character[] = [];
  constructor(private characterService: CharactersService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllCharacters();
  }

  getAllCharacters(){
    this.characters = this.characterService.getCharacters();
  }

  deleteCharacter(id: string){
    this.characterService.deleteCharacterById(id);
  }

  newCharacter(character: Character){
    this.characterService.addNewCharacter(character);
  }


}
