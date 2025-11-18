// Q3 - Arrow function vs Normal function inside an object

// Object with arrow-function method (Incorrect usage)
const user1 = {
    name: "Akhi",
    showName: () => {
        console.log("Arrow Function Output:", this.name);
    }
};

user1.showName(); // this.name → undefined


// FIXED VERSION using normal function
const user2 = {
    name: "Akhi",
    showName: function () {
        console.log("Normal Function Output:", this.name);
    }
};

user2.showName(); // this.name → "Akhi"
