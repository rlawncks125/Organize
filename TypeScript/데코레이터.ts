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

//   @WriteTemplate("<h2>dwdwa</h2>", "writeId")
//   class Test {
//     name = "testKK";

//     constructor() {
//       console.log("클래스 생성");
//     }
//   }

function Logger() {
  console.log("logger factory");
  return function(_: Function) {
    console.log("Logger return");
  };
}
function Template() {
  console.log("Template factory");
  return function(_: Function) {
    console.log("Tmeplate return");
  };
}

@Logger()
@Template()
class ClassName {} //

function Log(target: any, protyName: string | symbol) {
  console.log(target, protyName);
}

class AttrDeco {
  @Log
  title: string = "";
  @Log
  name: number = 0;
}

function Log2(target: any, name: string | symbol, dsc: PropertyDescriptor) {
  console.log(target);
  console.log(name);
  console.log(dsc);
}

class MethodClass {
  private _name = "s";

  @Log2
  set name(v: string) {
    this._name = v;
  }

  @Log2
  addTextNew() {
    return `new ${this._name}`;
  }
}

function WriteTemplate(wirte: string, hookId: string) {
  return function<T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        const getDom = document.getElementById(hookId) as HTMLDivElement;
        if (getDom) {
          getDom.innerHTML = wirte + this.name;
          console.log("데코레이터 호출 :" + this.name);
        }
      }
    };
  };
}

@WriteTemplate("<h2>dwdwa</h2>", "writeId")
class Test {
  name: string = "testKK";

  constructor() {}
}

new Test();

function AutoBind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
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
  constructor(private text: string) {}

  @AutoBind
  message() {
    console.log(this.text);
  }
}

const p = new Press("눌러투러");
const Btn1 = document.getElementById("autoBtn")! as HTMLButtonElement;

// Btn1.addEventListener("click", p.message.bind(p));
Btn1.addEventListener("click", p.message);

// Validation
interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required','positive']
  };
}
const registerdValidtor: ValidatorConfig = {};

function required(target: any, propName: string) {
  // target.constructor.name = 클래스 이름
  registerdValidtor[target.constructor.name] = {
    ...registerdValidtor[target.constructor.name],
    [propName]: [
      ...(registerdValidtor[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function positiveNumber(target: any, propName: string) {
  registerdValidtor[target.constructor.name] = {
    ...registerdValidtor[target.constructor.name],
    [propName]: [
      ...(registerdValidtor[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}
function validate(obj: any): boolean {
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
  @required
  title: string;
  @required
  @positiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")! as HTMLFormElement;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("유효하지 않는 값입니다.");
    return;
  }
  console.log(createdCourse);
});
