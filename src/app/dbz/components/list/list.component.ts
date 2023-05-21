import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() characterList: Character[] = []
  @Output() onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDeleteCharacterById(id: string){
    this.onDeleteCharacter.emit(id);
  }
}
