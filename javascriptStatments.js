// Statments to put onclick on button so text will appear in html

// 1. put onclick on button 2. create function and give function a name 3. grab element by id and put what the text is equal to

function myFunction() {
    document.getElementById('demo1').innerHTML = "Susan";
    document.getElementById("demo2").innerHTML = "Willard";
    document.getElementById('demo').innerHTML = z;
}

// Assigns value of 5 to x
let x = 5;
y = 6;
z = x + y;

// conditional statement (if statements)

let tempurature = 19;

if (tempurature > 5) {
    // block of code to be execute if statment is true
    document.body.style.backgroundColor = "purple";
}




// loop through an array and display elements in html 
/*
Steps
1. declare array 
2. loop through array 
3. append index of array elements to li 
4. append li to ul
*/ 
// declare array of integers

let numbers = [1, 5, 6];

for (let i = 0; i < numbers.length; i++) {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li += numbers[i];
    ul = document.appendChild('li');
    body.appendChild('ul');
}


