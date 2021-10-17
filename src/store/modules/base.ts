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
  age: number;
}

const state: IState = {
  name: "",
  age: 0,
};

const getters: GetterTree<IState, rootState> & BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE]: (state: IState) => (
    payload: gettersParms
  ) => {},
};

const mutations: MutationTree<IState> & BaseMutations = {
  [BaseMuationsTypes.MUTATIONS_BASE]: (
    state: IState,
    payload: mutationsParms
  ) => {},
};

const actions: ActionTree<IState, rootState> & BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE]: (
    actionsContext: ActionContext<IState, rootState>,
    payload: actionsParms
  ) => {},
};

export const module: Module<IState, rootState> = {
  //   namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};

// 클래스로 파라미터 받는거 만들어봤는데 흠...
// 편한거 같기도하고 아닌거같기도하고
export interface mutationsParms {
  name?: string;
  age?: number;
}
export interface gettersParms {
  name?: string;
  title?: string;
}
export interface actionsParms {
  name?: string;
  url?: string;
}

export class Base {
  static _mutations: mutationsParms = {
    age: 0,
    name: "",
  };
  static _getters: gettersParms = {
    name: "",
    title: "",
  };
  static _actions: actionsParms = {
    name: "",
    url: "",
  };

  mutations(parms: mutationsParms) {
    Base._mutations = parms;

    return Base._mutations;
  }
  getters(parms: gettersParms) {
    Base._getters = parms;

    return Base._getters;
  }
  actions(parms: actionsParms) {
    Base._actions = parms;
    return Base._actions;
  }
}
