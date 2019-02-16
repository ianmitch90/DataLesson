let maze = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 2],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function mazeRunner(maze) {
  //lets actually use the maze

  this.maze = maze;

  //traverse function to navigate maze

  this.traverse = function(column, row) {
    if (this.maze[column][row] === 2) {
      console.log(`Congrats! You won at ${column},${row}!`);
      console.log(maze);
      //check the row and columns for a 1
    } else {
      if (this.maze[column][row] === 1) {
        console.log(`🚶‍im walkin' here! at ${column},${row}`);
        //leaving a trail of the places we have been
        this.maze[column][row] = 8;

        if (column < this.maze.length - 1) {
          this.traverse(column + 1, row);
        }
        if (row < this.maze[column].length - 1) {
          this.traverse(column, row + 1);
        }
        if (column > 0) {
          this.traverse(column - 1, row);
        }
        if (row > 0) {
          this.traverse(column, row - 1);
        }
      }
    }
  };
}

let ms = new mazeRunner(maze);
ms.traverse(2, 0);
