import { Store } from "vuex";
import { State, useStore } from "./index";

import {
  actionsCallName as HeadCallName,
  IactionsParms as HeadParms,
} from "./modules/Haed";

export const actionsHead = (
  callName: HeadCallName,
  parms?: HeadParms,
  FuncCallStore?: Store<State>
): any => {
  const store = FuncCallStore || useStore();

  if (parms) return store.dispatch(`Head/${callName}`, parms);
  else return store.dispatch(`Head/${callName}`);
};
