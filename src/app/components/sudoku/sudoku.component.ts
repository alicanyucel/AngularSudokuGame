import { Component, OnInit } from '@angular/core';
import { SudokuService } from '../../services/sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css']
})
export class SudokuComponent implements OnInit {

  grid: number[][] = [];
  initialGrid: number[][] = [];
alert: any;

  constructor(private sudokuService: SudokuService) {}

  ngOnInit() {
    this.newGame('medium'); // varsayılan oyun
  }

  newGame(level: 'easy' | 'medium' | 'hard') {
    this.initialGrid = this.sudokuService.generate(level);
    this.grid = this.initialGrid.map(r => [...r]);
  }

  isEditable(r: number, c: number) {
    return this.initialGrid[r][c] === 0;
  }

  // ... önceki checkWin ve isValid fonksiyonların aynı kalabilir ...
  checkWin(): boolean {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (this.grid[r][c] === 0 || !this.isValid(r,c,this.grid[r][c])) {
          return false;
        }
      }
    }
    return true;
  }

  isValid(row: number, col: number, value: number): boolean {
    if (value === 0) return true;
    for (let c = 0; c < 9; c++) if (c !== col && this.grid[row][c] === value) return false;
    for (let r = 0; r < 9; r++) if (r !== row && this.grid[r][col] === value) return false;
    const sr = Math.floor(row/3)*3, sc = Math.floor(col/3)*3;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      if ((sr+r !== row || sc+c !== col) && this.grid[sr+r][sc+c] === value) return false;
    }
    return true;
  }
}
