//@ts-nocheck

const random = (max: number): number => {
  return Math.floor(Math.random() * max);
};

class Cell {
  public hasMine: boolean = false;

  public setMine(v: boolean): void {
    this.hasMine = v;
  }
}

export class Board {
  public getBoard(): Board {
    return this.board;
  }

  public plantMines(dimension: number, mines: number): void {
    let mineCount = 0;
    while (mineCount < mines) {
      let x = random(dimension),
        y = random(dimension);
      if (!this.board[x][y].hasMine) {
        this.board[x][y].setMine(true);
        mineCount++;
      }
    }
  }

  public countMines(): number {
    let count = 0;
    let i: number;
    let j: number;
    let row: Array<Cell>;
    let cell: Cell;

    for (i = 0; i < this.board.length; i++) {
      row = this.board[i];
      for (j = 0; j < row.length; j++) {
        cell = row[j];
        if (cell.hasMine) {
          count++;
        }
      }
    }

    return count;
  }

  public board: Array<Array<Cell>> = new Array();

  public constructor(dimension: number, mines: number): void {
    for (let i = 0; i < dimension; i++) {
      let row: Array<Cell> = [];
      for (let j = 0; j < dimension; j++) {
        row.push(new Cell(false));
      }
      this.board.push(row);
    }

    this.plantMines(dimension, mines);
  }
}
