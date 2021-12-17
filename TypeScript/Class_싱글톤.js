"use strict";
class singleton {
    constructor(name) {
        this.name = name;
    }
    static getInstance() {
        if (singleton.instance) {
            return singleton.instance;
        }
        this.instance = new singleton("nameWW");
        return this.instance;
    }
    get myName() {
        return this.name;
    }
    set myName(value) {
        this.name = value;
    }
}
const das = singleton.getInstance();
console.log(das.myName); // nameWW
das.myName = "newName";
console.log(das.myName); // newName
