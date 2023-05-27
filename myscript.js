var button = document.querySelector('button');
var box = document.getElementById('changeMe');

changeColor = () => {
    if(box.style.background == 'red') {
        box.style.background = 'blue';
    } else {
        box.style.background = 'red';
    }   
}

// Loop to Next on Click
var box1 = document.getElementById('colors');
// create array of colors
const myColors = ["yellow", "green", "orange", "purple", "aqua", "plum"];



changeMyColors = () => {
    // document.getElementById('colors').style.background = colors.map(colors[i]);

    color = myColors.shift();
    myColors.push(color);
    box1.style.backgroundColor = color;
}