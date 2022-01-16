const rect = require('./rectangle');
// We imported the area and perimeter modules using const rect from rectangle.js bringing them into our app.js file

function solveRect(l, w) {
    console.log(`Solving for rectangle with dimensions: ${l}, ${w}`);

    // Note that I used the backticks in the console log because we are using template literals

    rect(l, w, (err, rectangle) => {
        if (err) {
            console.log('ERROR:', err.message);
        // First we call the rect function. The function expects 3 arguments. Two positive numbers and a call back function which are the l, w & (err, rectangle). If there is an error it will show ERROR & the error message inside of the IF STATEMENT in rectangle.js
        } else {
            console.log(`Area of rectangle with dimensions ${l}, ${w} is: ${rectangle.area()}`);
            console.log(`Perimeter of rectangle with dimensions ${l}, ${w} is: ${rectangle.perimeter()}`);
        }
        // IF there is NOT an error then it proceeds to the else block. We console log a message with template literals to let the user know the Area of the rectangle. Inside the template literal at the end of the console log we call on rectangle as defined in the parameter list so that it can pull the data from the .area() function which is located in the set time out function which is inside the else block which is inside of rectangle.js
    });
    console.log('This statement is logged after the call to rect()');
}   // This console log helps us see the order in which the code was executed. This will show for two seconds before the else block executes. 

solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(5, -3);

// CALLBACKS AND ERROR HANDLING IN NODE APPLICATIONS