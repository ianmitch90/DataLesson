# Arrays and Big O notation

## Data and Arrays

So, you are in a grocery store, and you are preparing for a large party. You need some snacks, drinks, maybe a snack for yourself, some cleaning supplies, maybe some extra cups and of course some glitter!

Where should you start first? Think of the layout of a store, Theres diffrent sections, and in those sections there are shelves, and each shelve has items of various types arranged together by name, price, brand, type, size, and by so many factors it makes my head spin!

But! it's no sweat! You can make your own choices, the methods you use to get the items, how they are arranged, how you select them, and even if you need to swap something out. You even have influence on how quickly or slowly you shop based on your methods.

Arrays are everywhere in this example, from the empty/full shopping cart, to the isles, shelves, sections, departments, prices, etc!

Formally Arrays store data elements based on an sequential index, this allows us to do alot of things and helps us organize, manipulate, transform, and structure data! They are one of the most oldest forms of data structures we have and are based on [Tuples](https://en.wikipedia.org/wiki/Tuple) from set theory.

So it comes as no surpise that we can just about compare anything to arrays even shopping!

### [Cool, but, what, about, the, data?]

Glad you asked! because the goal is to see this as a pattern, not some abetrary data structure.
Now we know that we are looking for a pattern of data, lets start identifiting some common arrays.

## Array Types:

### Linear Arrays

- More technically called "one dimnsional arrays"
- These type of arrays are static in size, and usually have a lower profile on memory usage
- Great for looking up items by their Index
- Because of their simplicity they are usually very quick and easy to use with a low complexity 0(1)

### Dynamic Arrays

- These arrays are way more flexiable! They provide extra space so that you can add and remove from the Original Array without creating new arrays each time.
- DynamicArrayPower = [thanksgiving, new years, , ]
  In this array there two extra slots for you to add your pets birthday, or a summer holiday! so, i can still use the original array without worrying about it dumping out and copying its contents every time i make a change!

### Linear vs Dynamic

#### Static:

OriginalArray = [green, blue, red]
(max of 3 spaces so if i want more i need to make a new static array to add space, THEN add my elements)

NewArray = [green, blue, red, purple, yellow]
(we moved the contents from the original array INTO the NewArray that has 5 spaces instead of 3)

OriginalArray may or may not still be held in memory or used at this point

This is preferable if you are wanting more "Immutable" Data

#### Dynamic

OriginalArray = [green, blue, red]
However if we add more colors we can still use the same array from memory
OriginalArray = [green, blue, red, purple, yellow]

These types of arrays allow us to make are manipulations "Mutable"

More about [Mutable and Immutable Data Structures](https://benmccormick.org/2016/06/04/what-are-mutable-and-immutable-data-structures-2)

### Two Dimensional Arrays

You have now entered the matrix! :computer: :sunglasses:

Just kidding, it's some more math! But these are very useful to use! Heres a [quick refresher](https://www.mathwarehouse.com/algebra/matrix/) from your school days about what a matrix is!

![Matrix](https://www.mathwarehouse.com/algebra/matrix/images/matrix-example-titled.gif)

Quite simply two dimensional arrays have an X and Y indices like a grid, nested arrays can also be examples of these types.

![2d array example](https://i.ytimg.com/vi/KoHEHqoan6w/maxresdefault.jpg)

### Big O Complexity

A quick search on google and you see this same chart everywhere!

![bigo](http://i0.wp.com/www.jessicayung.com/wp-content/uploads/2016/08/screenshot-5.png?fit=846%2C591)

For the most part its a tad straight forward right? everything thats red is _slow_ and _bad_ and anything in the green is goals!

The main take away for us right now is how we need to strive for **performant** and **fast** logic when shopping!

When some shoppers are fast and know exactly how to find what they need and how to get in and get out fast, some are on average on being able to solve the same problem, while others may need some time shopping for the same thing. Algorithms are the same, in both cases it's about managing **space** and **time**!

![wow](https://media.giphy.com/media/nS7HC4nVwA8Xm/giphy.gif)

### Recursion

Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem, so lets begin authoring a recursive algorithm that allows us to use what we have learned so far!

## Now for a intervew challange!

Few terms to know in general:

- **Traverse:** print all the array elements one by one.

- **Insertion:** Adds an element at the given index.

- **Deletion:** Deletes an element at the given index.

- **Search:** Searches an element using the given index or by the value.

- **Update:** Updates an element at the given index.

### Enter the Matrix

So for this challange we are going to be navigating a 2D maze!

you can make this maze as big as you want but for demo purposes lets keep it 10 x 10

```javascript
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
```

Here we can see the 1's are our path with some tricky paths and 2 is the finish line! 0 are walls and should be ignored. the goal is to start at the first possible 1 on the left and follow it until we reach the 2 on the right wall.

so now we have to create our answer:

firstly, you can't solve a maze if you cant _traverse_ it. let's make a function thats going to accept two arguments: _column_ & _row_ these will be the two **Dimensions** we can check since we are checking arrays of arrays we need to keep track of a lot of things all at once:

- If you reach a 2 that means you have reached the end of the maze and should stop.

- If you see a 1 that means its a path and you should check for further information

- Are we inside the maze? we need to make sure we don't check anything outside the bounds of the maze

#### Heres what the challange might look like:

```javascript
function mazeRunner(maze) {
  //lets actually use the maze

  this.maze = maze;

  //traverse function to navigate maze

  this.traverse = function(column, row) {
    // Your code here..
  };
}
```

So, earlier we identified a few goals to begin solving this, the first thing is to win right?

If at any point we reach 2 we should end it before it calls itself recrusively and checks all the things.

if we should win we need to be notified that it worked so, making a log to identify us that we won, but also to confirm it's position in the matrix

```javascript
function mazeRunner(maze) {
  //lets actually use the maze

  this.maze = maze;

  //traverse function to navigate maze

  this.traverse = function(column, row) {
    if (this.maze[column][row] === 2) {
      console.log(`Congrats! You won at ${column},${row}!`);
      //check the row and columns for a 1
    } else {
      //more code here...
    }
  };
}
```

With our finish line established lets get to actually moving though this maze, so we need to accomplish 2 things with our next requirement

- If you see a 1 then its a valid path
- Log the activity and confirm to us that it checked that it was actually moving through the maze

```javascript
function mazeRunner(maze) {
  //lets actually use the maze

  this.maze = maze;

  //traverse function to navigate maze

  this.traverse = function(column, row) {
    if (this.maze[column][row] === 2) {
      console.log(`Congrats! You won at ${column},${row}!`);
      //check the row and columns for a 1
    } else {
      if (this.maze[column][row] === 1) {
        console.log(`🚶‍im walkin' here! at ${column},${row}`);
      }
    }
  };
}
```

### Gotcha!

in the actual maze you may have noticed there is a path that is a circle! So, as we check these columns and rows theres nothing preventing our recursive solution from getting stuck in an infinate loop!

So, Have i already visited this 1 before? if so, lets find another acceptible path that we _haven't_ visited

So since all we are looking for is 1 ( our path ), 2 ( the finish line ), and ignoring 0's we should swap out the places we have been before with any random thing!

```javascript
function mazeRunner(maze) {
  //lets actually use the maze

  this.maze = maze;

  //traverse function to navigate maze

  this.traverse = function(column, row) {
    if (this.maze[column][row] === 2) {
      console.log(`Congrats! You won at ${column},${row}!`);
      //check the row and columns for a 1
    } else {
      if (this.maze[column][row] === 1) {
        console.log(`🚶‍im walkin' here! at ${column},${row}`);
        //leaving a trail of the places we have been
        this.maze[column][row] = 8;
      }
    }
  };
}
```

### Finally check that we are actually inside the matrix!

We just check that we are indeed in the bounds of the game, why this is important is we might be out of bounds! luckily javascript is very nice and will not check for this a alot however, when you are dealing with these dynamic arrays that are being changed and mutated you may end up with things being checked that dont exist!

This behavior happens in strongly typed languages, and also with a very large matrix.

```javascript
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
```

## Run that game in your console and watch the magic unfold!

## Final Thoughts

You may have noticed some of the values in our maze are still 1's thats because the path was in a loop and we only check columns and rows from left to right so, it ignored the useless path knowing that there was another way available!

In terms of effeciency there are always better ways to solve this problem! and i will leave the rest to you, refactoring maybe into a switch case, and maybe a diffrent stratagey to improve its performance.

In the challange we explored Arrays, in diffrent forms, primarily a 2D array! we explored 2 main fundementals in our solution!

- **Traverse:** Moving through the maze

- **Update:** Updates the position in our matrix and changed its value

Make this game all yours, create paths, make it larger, or smaller, delete paths, reshape the game and improve upon your understanding of Data Manipulation and Arrays!
