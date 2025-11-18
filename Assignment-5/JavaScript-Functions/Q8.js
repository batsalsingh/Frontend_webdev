// Q8 - Custom myMap() implementation for all arrays

// Adding method to Array prototype
Array.prototype.myMap = function (callback) {
    const result = [];

    // 'this' refers to the array on which myMap() is called
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this)); 
    }

    return result;
};

// Example usage
const arr = [1, 2, 3];
const output = arr.myMap(num => num * 2);

console.log(output); // [2, 4, 6]
