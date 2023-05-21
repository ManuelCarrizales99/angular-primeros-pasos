import { AddCharacterComponent } from './components/add-character/add-character.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { MainPageComponent } from './pages/main-page.component';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
