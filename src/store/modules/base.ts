import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import { State as rootState } from "../index";
import { BaseMutations, BaseMuationsTypes } from "@/store/mutations";
import { BaseGetters, BaseGettersTypes } from "@/store/getters";
import { BaseActions, BaseActionsTypes } from "@/store/actions";

export interface IState {
  name: string;
  baseT: number;
  items: string[];
}

const state: IState = {
  name: "",
  baseT: 0,
  items: [],
};

const getters: GetterTree<IState, rootState> & BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE]: (state: IState) => (
    payload: gettersParms
  ) => {
    console.log(state, payload);
  },
};

const mutations: MutationTree<IState> & BaseMutations = {
  [BaseMuationsTypes.MUTATIONS_BASE]: (
    state: IState,
    payload: mutationsParms
  ) => {
    console.log("mutations", state, payload);
    const { name, items } = payload;
    name && (state.name = name);
    items && (state.items = [...state.items, ...items]);

    console.log(state.items);
  },
};

const actions: ActionTree<IState, rootState> & BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE]: async (
    actionsContext: ActionContext<IState, rootState>,
    payload: actionsParms
  ) => {
    setTimeout(() => {
      console.log(payload);
    }, 1000);
  },
  [BaseActionsTypes.PROMISE_TEST]: async (
    actionsContext: ActionContext<IState, rootState>,
    { url }: actionsParms
  ) => {
    return new Promise((resolve) => {
      let isBool = false;

      setTimeout(() => {
        url && (isBool = true);

        resolve(isBool);
      }, 500);
    });
  },
};

const module: Module<IState, rootState> = {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};

export default module;

// 클래스로 파라미터 받는거 만들어봤는데 흠...
// 편한거 같기도하고 아닌거같기도하고
export interface mutationsParms {
  name?: string;
  age?: number;
  title?: string;
  items?: string[];
}
export interface gettersParms {
  name?: string;
  title?: string;
}
export interface actionsParms {
  name?: string;
  url?: string;
}

export class VuexBase {
  mutations(parms: mutationsParms) {
    return parms;
  }
  getters(parms: gettersParms) {
    return parms;
  }
  actions(parms: actionsParms) {
    return parms;
  }
}
