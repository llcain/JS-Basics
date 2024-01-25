const car = ["BMW", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < car.length; i++) {
//     text += car[i] + "<br>";
// }

let text = "";
for ( let i = 0; i < car.length; i++) {
    text += car[i] + "<br>";
}

document.getElementById('demo').innerHTML = text;
document.getElementById('demo1').innerHTML = "hello ";