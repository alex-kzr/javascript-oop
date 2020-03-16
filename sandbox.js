// constructor function
function User(username, email){
    this.username = username;
    this.email = email;
}

User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}

const userOne = new User('mario', 'mario@xxx.com');
const userTwo = new User('luigi', 'luigi@xxx.com');
console.log(userOne, userTwo);

userTwo.login().logout();

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to 'build' the object