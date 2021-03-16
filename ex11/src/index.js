function switchCase(letter) {
    // Write code below this line
    switch (letter) {
        case "a":
            return "antelope";
            break;
        case "b":
            return "bird";
            break;
        case "c":
            return "cat";
            break;
        default:
            return "stuff";
            break;
    }

    // Write code above this line
    return animals;
}

console.log(switchCase("a")); //Change this line
console.log(switchCase("b")); //Change this line
console.log(switchCase("c")); //Change this line
console.log(switchCase("d")); //Change this line
console.log(switchCase("4")); //Change this line
module.exports = switchCase;