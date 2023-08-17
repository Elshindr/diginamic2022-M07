"use strict";
{
    let test = "1";
}
function hello(text) {
    return `Hello ${text}`;
}
hello("Bob");
// Types primitifs
let hidden = false;
let size = 16;
let text = "Message";
// Tableaux
const fruits = ["Orange", "Banane"];
// Tuples
const point = [12.3, 54.23, "hello"];
let contact = ["Bob", "72", false];
// Enumération
var Color;
(function (Color) {
    Color[Color["white"] = 0] = "white";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
let c = Color.blue;
// Quand on ne connaît pas le type à l’avance
let test = 4;
test = "Message";
let n = null;
let u = undefined;
// Fonction qui ne renvoie rien
function testVoid(text) {
    console.log(`Hello ${text}`);
}
// Fonction qui génère une exception
function error(message) {
    throw new Error(message);
}
const boby = {
    name: "Dylan",
    street: 125
};
