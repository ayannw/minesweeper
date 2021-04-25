//@ts-nocheck

const random = (max: number): number => {
  return Math.floor(Math.random() * max);
};

class Cell implements Cell {
  public hasMine: boolean = false;

  public setMine(v: boolean) {
    this.hasMine = v;
  }
}

export class Board {
  public getBoard() {
    return this.board;
  }

  public plantMines(dimension, mines) {
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

  public countMines() {
    let count = 0,
      i,
      j,
      row,
      cell;

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

  public board: any[] = new Array();

  public constructor(dimension: number, mines: number) {
    for (let i = 0; i < dimension; i++) {
      let row = [];
      for (let j = 0; j < dimension; j++) {
        row.push(new Cell(false));
      }
      this.board.push(row);
    }

    this.plantMines(dimension, mines);
  }
}
