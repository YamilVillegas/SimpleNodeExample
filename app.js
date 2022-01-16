const rect = require('./rectangle');
// We imported the area and perimeter modules using const rect from rectangle.js bringing them into our app.js file

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    // Note that I used the backticks in the console log because we are using template literals

    if (l <= 0 || w <= 0) {
        console.log(`Rectangle dimensions must be greater than zero. Received: ${l}, ${w}`);
    } else {
        console.log(`Area of rectangle: ${rect.area(l, w)}`);
        console.log(`Perimeter of rectangle: ${rect.perimeter(l, w)}`);
    }
}   // Since we cannot have a Rectangle with the dimensions zero or smaller we wrote an IF STATEMENT to let the user know the dimensions must be greater than zero. In the else block we use the area & perimeter modules that we created in rectangle.js to figure out the solveRect below. We can see the answers using Node App in out Bash terminal.

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);