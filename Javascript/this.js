// function 함수 === const 함수 =  function(){ ... }
// !== const 함수 = () =>{ ... }

// #### object this 접근  ####
const one = {
  data: {
    name: "one",
  },
  getName: function() {
    return this.data.name; // one , one change
  },
  getNameArrow: () => {
    // error
    // html 에선 window 가리킴
    return this.data.name; // Cannot read property 'name' of undefined
  },
};

one.__proto__.changeName = function(txt) {
  this.data.name = txt;
};

console.log(one.getName()); // one
// console.log(one.getNameArrow()); // Cannot read property 'name' of undefined

one.changeName("one change");
console.log(one.getName()); // one change
// console.log(one.getNameArrow()); // Cannot read property 'name' of undefined

// #### Object arrow function 타입 에서 데이터 접근 할려면 ####
const oneArrow = {
  data: {
    name: "one",
  },
  getNameArrow: () => {
    return oneArrow.data.name;
  },
};

oneArrow.__proto__.changeName = function(txt) {
  oneArrow.data.name = txt;
};

console.log(oneArrow.getNameArrow()); // one
oneArrow.changeName("one change");
console.log(oneArrow.getNameArrow()); // one change

// #### function 안에 함수를 정의할떄 ####
// this가 가르키는 위치 확인
const arrowThis = {
  data: {
    name: "root",
  },
  getName: function() {
    this.name = "getFunc";

    console.log(this.name); // getFunc
    console.log(this.data.name); // root

    function baseFunc() {
      console.log(this.name); // undefine // baseFunc() 가리킴
      // console.log(this.data.name) // Cannot read property 'name' of undefined

      this.funcname = "baseFunc";
      console.log(this.funcname); // baseFunc
    }

    const varFunc = function() {
      console.log(this.name); // undefine // varFunc() 가리킴
      // console.log(this.data.name) // Cannot read property 'name' of undefined

      this.funcname = "varFunc";
      console.log(this.funcname); // varFunc
    };

    const arrowFunc = () => {
      console.log(this.name); // getFunc
      console.log(this.data.name); // root

      this.funcname = "arrowFunc";
      console.log(this.funcname); // arrowFunc
    };

    return { baseFunc, arrowFunc, varFunc };
  },
};

arrowThis.getName().baseFunc();
arrowThis.getName().arrowFunc();
arrowThis.getName().varFunc();

// #### class 안에 function ####
// this 가 가르키는 위치
class classThis {
  rootName = "root class";

  getName() {
    this.getVar = "getVar";

    console.log(this.rootName); // root class

    function baseFunc() {
      console.log(this.name); // root class return name
      console.log(this.rootName); // undefined
      console.log(this.getVar); // undefined
    }

    const varFunc = function() {
      console.log(this.name); // root class return name
      console.log(this.rootName); // undefined
      console.log(this.getVar); // undefined
    };

    const arrowFunc = () => {
      console.log(this.name); // undefined
      console.log(this.rootName); // root class
      console.log(this.getVar); // getVar
    };

    return {
      baseFunc,
      varFunc,
      arrowFunc,
      name: this.rootName + " return name", // root class return name
    };
  }

  getArrow = () => {
    return this.rootName; // root class
  };

  getVarFunc = function() {
    return this.rootName; // root class
  };
}
const cla = new classThis();

console.log(cla.getName().name); // root class return name
console.log(cla.getArrow()); // root class
console.log(cla.getVarFunc()); // root class

cla.getName().baseFunc();
cla.getName().varFunc();
cla.getName().arrowFunc();

// ####  부모가 바뀔때 this가 가리키는 위치 ####
this.functionName = "root Function";

const func1 = function() {
  return this.functionName;
};

const func2 = () => this.functionName;

console.log(func1()); // undefined
console.log(func2()); // root Function

const funcParent = () => {
  this.functionName = "func 22";

  const ds1 = func1();
  const ds2 = func2();
  console.log(ds1); // undefined
  console.log(ds2); // func 22
};

funcParent();

// #### this를 이용하여 입력받은 함수 호출 ####
const internalFuncCall = (funcName, ...arg) => {
  this.f1 = () => {
    return "f1 call : " + arg.flat().join(" ");
  };
  this.f2 = function() {
    return "f2 call : " + arg.flat().join(" ");
  };

  return this[funcName]();
};

const call_1 = internalFuncCall("f1", "te", "4", "66");
const call_2 = internalFuncCall("f2", "테사기");

console.log(call_1); // f1 call : te 4 66
console.log(call_2); // f2 call : 테사기
