//@ts-nocheck
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Board = void 0;
    const random = (max) => {
        return Math.floor(Math.random() * max);
    };
    class Cell {
        constructor() {
            this.hasMine = false;
        }
        setMine(v) {
            this.hasMine = v;
        }
    }
    class Board {
        constructor(dimension, mines) {
            this.board = new Array();
            for (let i = 0; i < dimension; i++) {
                let row = [];
                for (let j = 0; j < dimension; j++) {
                    row.push(new Cell(false));
                }
                this.board.push(row);
            }
            this.plantMines(dimension, mines);
        }
        getBoard() {
            return this.board;
        }
        plantMines(dimension, mines) {
            let mineCount = 0;
            while (mineCount < mines) {
                let x = random(dimension), y = random(dimension);
                if (!this.board[x][y].hasMine) {
                    this.board[x][y].setMine(true);
                    mineCount++;
                }
            }
        }
        countMines() {
            let count = 0, i, j, row, cell;
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
    }
    exports.Board = Board;
});
