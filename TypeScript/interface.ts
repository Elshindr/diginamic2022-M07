interface User {
  firstname: string;
  sayHello(lastname: string): void;
}
const user1: User = {
  firstname: "1",
  sayHello(lastname: string) {
    console.log(`Bonjour, je m'appelle ${this.firstname} ${lastname}`);
  }
}
user1.sayHello("qsdf");
