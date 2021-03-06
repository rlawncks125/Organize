import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import { State as rootState } from "../index";
import { HeadMutations, HeadMuationsTypes } from "@/store/mutations";
import { HeadGetters, HeadGettersTypes } from "@/store/getters";
import { HeadActions, HeadActionsTypes } from "../actions";

export interface IState {
  name: string;
  age: number;
}

const state: IState = {
  name: "",
  age: 0,
};

const getters: GetterTree<IState, rootState> & HeadGetters = {
  [HeadGettersTypes.GET_NAME_ADD_PARMS]: (state: IState) => (
    addName: string
  ) => {
    return `${state.name} ${addName}`;
  },
};

const mutations: MutationTree<IState> & HeadMutations = {
  [HeadMuationsTypes.SET_HAED_NAME]: (
    state: IState,
    { name }: mutationsParms
  ) => {
    name && (state.name = name);
  },
  [HeadMuationsTypes.SET_HAED_AGE]: (
    state: IState,
    { age }: mutationsParms
  ) => {
    age && (state.age = age);
  },
};

const actions: ActionTree<IState, rootState> & HeadActions = {
  [HeadActionsTypes.HEAD_ACTIONS_BASIC]: (
    { commit }: ActionContext<IState, rootState>,
    { name }: actionsParms
  ) => {
    commit(HeadMuationsTypes.SET_HAED_NAME, { name });
  },
};

export const module: Module<IState, rootState> = {
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};

//
export interface mutationsParms {
  name?: string;
  age?: number;
}
export interface gettersParms {
  name?: string;
}
export interface actionsParms {
  name?: string;
}

export class Haed {
  static _mutations: mutationsParms = {
    age: 0,
    name: "",
  };
  static _getters: gettersParms = {
    name: "",
  };
  static _actions: actionsParms = {
    name: "",
  };

  mutations(parms: mutationsParms) {
    Haed._mutations = parms;

    return Haed._mutations;
  }
  getters(parms: gettersParms) {
    Haed._getters = parms;

    return Haed._getters;
  }
  actions(parms: actionsParms) {
    Haed._actions = parms;
    return Haed._actions;
  }
}
