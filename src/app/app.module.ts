import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SudokuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
