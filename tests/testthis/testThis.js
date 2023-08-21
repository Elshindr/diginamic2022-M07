const button = document.querySelector("#button");

class Person {
  constructor(name) {
    this.name = name;
    this.button = button;
    this.manageEvent();
  }
  introduceMyself = function() {
    console.log(`Hello, my name is ` + this.name);
  }
  manageEvent = function() {
    
    this.button.onclick = () => {
      console.log(`test click sur bouton`);
      console.log(`this`, this);
      console.log(`Hello, my name is ` + this.name);
    }
  }
}
const p = new Person("Pierre");
p.introduceMyself();


