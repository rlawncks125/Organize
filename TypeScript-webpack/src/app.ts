import { ModuelOne } from "./module-one";

import _ from "lodash";

console.log("app");

const module1 = new ModuelOne("asdwad", 2);

console.log(module1.getState());

console.log("dw");

console.log(_.shuffle(["w", "a", "x", "z"]));

console.log(GLOBAL_DATA_VALUE);
