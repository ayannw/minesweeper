# Minesweeper-board

A fast, lightweight Node module for generating minesweeper boards.

[![install size](https://packagephobia.com/badge?p=minesweeper-board)](https://packagephobia.com/result?p=minesweeper-board)

Installation:

```bash
npm i minesweeper-board

# or

yarn add minesweeper-board
```

Usage:

```js
//cjs:
const { Board } = require('minesweeper-board');

//mjs:
import { Board } from 'minesweeper-board';

const board = new Board(5, 5); //dimension, mines
console.log(board.getBoard());
```

demo 5x5 board:

```js
[
  [
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: true },
    Cell { hasMine: false }
  ],
  [
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false }
  ],
  [
    Cell { hasMine: false },
    Cell { hasMine: true },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false }
  ],
  [
    Cell { hasMine: true },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false }
  ],
  [
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: false },
    Cell { hasMine: true },
    Cell { hasMine: true }
  ]
]
```

 - `hasMine`: indicates if the cell has a mine or not.
