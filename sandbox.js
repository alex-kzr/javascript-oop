class User {
    constructor(username, email){
        // set up properties
        this.username = username;
        this.email = email;
    }
}

const userOne = new User('mario', 'mario@xxx.com');
const userTwo = new User('luigi', 'luigi@xxx.com');

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object