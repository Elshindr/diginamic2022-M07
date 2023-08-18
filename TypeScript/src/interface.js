"use strict";
const user1 = {
    firstname: "1",
    sayHello(lastname) {
        console.log(`Bonjour, je m'appelle ${this.firstname} ${lastname}`);
        return "Hello";
    }
};
user1.sayHello("qsdf");
