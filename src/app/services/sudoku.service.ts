import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SudokuService {
  private size = 9;

  /** Yeni oyun üret */
  generate(difficulty: 'easy' | 'medium' | 'hard' = 'medium'): number[][] {
    const board = this.createSolvedBoard();
    this.removeCells(board, difficulty);
    return board;
  }

  /** Çözülmüş sudoku üret (backtracking ile) */
  private createSolvedBoard(): number[][] {
    const board = Array.from({ length: 9 }, () => Array(9).fill(0));
    this.fillBoard(board);
    return board;
  }

  private fillBoard(board: number[][]): boolean {
    for (let row = 0; row < this.size; row++) {
      for (let col = 0; col < this.size; col++) {
        if (board[row][col] === 0) {
          const nums = this.shuffle([1,2,3,4,5,6,7,8,9]);
          for (let n of nums) {
            if (this.isValid(board, row, col, n)) {
              board[row][col] = n;
              if (this.fillBoard(board)) return true;
              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  /** Hücre boşaltma (zorluk seviyesine göre) */
  private removeCells(board: number[][], difficulty: 'easy'|'medium'|'hard') {
    let removeCount = difficulty === 'easy' ? 35 : difficulty === 'medium' ? 45 : 55;
    while (removeCount > 0) {
      const r = Math.floor(Math.random() * 9);
      const c = Math.floor(Math.random() * 9);
      if (board[r][c] !== 0) {
        board[r][c] = 0;
        removeCount--;
      }
    }
  }

  private isValid(board: number[][], row: number, col: number, val: number): boolean {
    for (let c = 0; c < 9; c++) if (board[row][c] === val) return false;
    for (let r = 0; r < 9; r++) if (board[r][col] === val) return false;
    const sr = Math.floor(row / 3) * 3;
    const sc = Math.floor(col / 3) * 3;
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++)
      if (board[sr+r][sc+c] === val) return false;
    return true;
  }

  private shuffle<T>(arr: T[]): T[] {
    return arr.sort(() => Math.random() - 0.5);
  }
}
