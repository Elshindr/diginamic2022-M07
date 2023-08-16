export default class Person {
  constructor(name) {
    this.name = name;
  }
  present() {
    console.log("hello, I'm " + this.name);
  }
}
export function test() {
  console.log(`Test`);
}