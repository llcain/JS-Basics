console.log("String is empty");

// check if a string is empty

function isEmptyString(some_string) {
    // isEmptyString("") -> True
    // isEmptySting("The Godfather") -> False

    if (some_string == "") {
        return true
    } else {
        return false
    }
}

console.log(isEmptyString("Bob"));
console.log(isEmptyString(""));


