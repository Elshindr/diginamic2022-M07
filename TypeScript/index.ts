{
  let test: string = "1";
}

function hello(text: string){
  return `Hello ${text}`;
}
hello("Bob");
// Types primitifs
let hidden: boolean = false;
let size: number = 16;
let text: string = "Message";
// Tableaux
const fruits: string[] = ["Orange", "Banane"];
// Tuples
const point: [number, number, string] = [12.3, 54.23, "hello"];
let contact: [string, number | string, boolean] = ["Bob", "72", false];
// Enumération
enum Color {
  white,
  blue,
  red,
}
let c: Color = Color.blue;

// Quand on ne connaît pas le type à l’avance
let test: any = 4;
test = "Message";
let n: null = null;
let u: undefined = undefined;

// Fonction qui ne renvoie rien
function testVoid(text: string): void {
  console.log(`Hello ${text}`);
}
// Fonction qui génère une exception
function error (message: string): never {
  throw new Error(message);
}

type contact = {
  name: string,
  street: number,
  friends?: string[]
}
const boby: contact = {
  name: "Dylan",
  street : 125
}




