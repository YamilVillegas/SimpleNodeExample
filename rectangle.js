module.exports = (x, y, callback) => {
    // Since we are using a function as the value for the entire export we must use module.exports instead of the shorthand way to export the module. 
    if (x <= 0 || y <= 0) {
        callback(new Error(`Rectangle dimensions must be greater than zero. Received: ${x}, ${y}`));
    }   // In the IF STATEMENT we are implementing error handling. We are going to check for the error condition. We run a check to see if x is less than or equal to zero and if y is less than or equal to zero. If it is then we run an Error object with the new keyword, we then add in a message. 
    else {
        setTimeout(() =>
            callback(null, {
                perimeter: () => 2 * (x + y),
                area: () => x * y
            }),
            2000
        );
    }
}; // IF it DOES NOT have any errors we use setTimeout() and pass it a function that contains the callback with the argument null which means there is no error. The second argument in the callback function is an object that contains perimeter and area. We finish the setTimeout() function by passing in 2000 which is how many milliseconds to wait.