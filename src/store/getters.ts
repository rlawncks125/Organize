import { useStore } from "./index";
import {
  gettersCallType as moduleACall,
  gettersPrams as moduleAParms,
} from "./modules/moduleA";
import {
  gettersCallName as HeadCallName,
  IgettersPrams as HeadParms,
} from "./modules/Haed";

// ModuleA
export const gettersModuleA = (
  callName: moduleACall,
  parms?: moduleAParms
): any => {
  const store = useStore();
  console.log(parms);

  if (parms) return store.getters[`moduleA/${callName}`](parms);
  else return store.getters[`moduleA/${callName}`];
};

// Head
export const gettersHead = (callName: HeadCallName, parms?: HeadParms): any => {
  const store = useStore();

  if (parms) return store.getters[`Head/${callName}`](parms);
  else return store.getters[`Head/${callName}`];
};
