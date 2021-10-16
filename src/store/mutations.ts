import { Store } from "vuex";
import { State, useStore } from "./index";
import {
  mutationsCallType as moduleACallName,
  MutationsPrams as moduleAParms,
} from "./modules/moduleA";
import {
  mutationsCallName as HeadCallName,
  ImutationsParms as HeadParms,
} from "./modules/Haed";

export const mutationsModuleA = (
  callName: moduleACallName,
  parms?: moduleAParms,
  FuncCallStore?: Store<State>
): any => {
  const store = FuncCallStore || useStore();

  console.log(store, `moduleA/${callName}`);
  //
  return store.commit(`moduleA/${callName}`, parms);
};

export const mutationsHead = (
  callName: HeadCallName,
  parms?: HeadParms,
  FuncCallStore?: Store<State>
) => {
  const store = FuncCallStore || useStore();

  return store.commit(`Head/${callName}`, parms);
};
