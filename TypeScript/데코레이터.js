"use strict";
// function WriteTemplate(wirte: string, hookId: string) {
//     return function(constructor: any) {
//       const getDom = document.getElementById(hookId) as HTMLDivElement;
//       if (getDom) {
//         getDom.innerHTML = wirte;
//       }
//       const c = new constructor();
//       console.log("데코레이터 호출 :" + c.name);
//     };
//   }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//   @WriteTemplate("<h2>dwdwa</h2>", "writeId")
//   class Test {
//     name = "testKK";
//     constructor() {
//       console.log("클래스 생성");
//     }
//   }
function Logger() {
    console.log("logger factory");
    return function (_) {
        console.log("Logger return");
    };
}
function Template() {
    console.log("Template factory");
    return function (_) {
        console.log("Tmeplate return");
    };
}
let ClassName = class ClassName {
}; //
ClassName = __decorate([
    Logger(),
    Template()
], ClassName);
function Log(target, protyName) {
    console.log(target, protyName);
}
class AttrDeco {
    constructor() {
        this.title = "";
        this.name = 0;
    }
}
__decorate([
    Log
], AttrDeco.prototype, "title", void 0);
__decorate([
    Log
], AttrDeco.prototype, "name", void 0);
function Log2(target, name, dsc) {
    console.log(target);
    console.log(name);
    console.log(dsc);
}
class MethodClass {
    constructor() {
        this._name = "s";
    }
    set name(v) {
        this._name = v;
    }
    addTextNew() {
        return `new ${this._name}`;
    }
}
__decorate([
    Log2
], MethodClass.prototype, "name", null);
__decorate([
    Log2
], MethodClass.prototype, "addTextNew", null);
function WriteTemplate(wirte, hookId) {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                const getDom = document.getElementById(hookId);
                if (getDom) {
                    getDom.innerHTML = wirte + this.name;
                    console.log("데코레이터 호출 :" + this.name);
                }
            }
        };
    };
}
let Test = class Test {
    constructor() {
        this.name = "testKK";
    }
};
Test = __decorate([
    WriteTemplate("<h2>dwdwa</h2>", "writeId")
], Test);
new Test();
function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        },
    };
    return adjDescriptor;
}
// auto bind
class Press {
    constructor(text) {
        this.text = text;
    }
    message() {
        console.log(this.text);
    }
}
__decorate([
    AutoBind
], Press.prototype, "message", null);
const p = new Press("눌러투러");
const Btn1 = document.getElementById("autoBtn");
// Btn1.addEventListener("click", p.message.bind(p));
Btn1.addEventListener("click", p.message);
const registerdValidtor = {};
function required(target, propName) {
    var _a, _b;
    // target.constructor.name = 클래스 이름
    registerdValidtor[target.constructor.name] = Object.assign(Object.assign({}, registerdValidtor[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registerdValidtor[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "required",
        ] });
}
function positiveNumber(target, propName) {
    var _a, _b;
    registerdValidtor[target.constructor.name] = Object.assign(Object.assign({}, registerdValidtor[target.constructor.name]), { [propName]: [
            ...((_b = (_a = registerdValidtor[target.constructor.name]) === null || _a === void 0 ? void 0 : _a[propName]) !== null && _b !== void 0 ? _b : []),
            "positive",
        ] });
}
function validate(obj) {
    const objValidtor = registerdValidtor[obj.constructor.name];
    let isValid = true;
    if (!objValidtor) {
        return true;
    }
    for (const prop in objValidtor) {
        for (let i = 0; i < objValidtor[prop].length; i++) {
            switch (objValidtor[prop][i]) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    required
], Course.prototype, "title", void 0);
__decorate([
    required,
    positiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title");
    const priceEl = document.getElementById("price");
    const title = titleEl.value;
    const price = +priceEl.value;
    const createdCourse = new Course(title, price);
    if (!validate(createdCourse)) {
        alert("유효하지 않는 값입니다.");
        return;
    }
    console.log(createdCourse);
});
