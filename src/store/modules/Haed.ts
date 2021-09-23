import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { State as rootState } from "../index";

// State
export interface IState {
  rootName: string;
  url: string;
  job: string;
}

const state: IState = {
  rootName: "rootMan",
  url: "http://kimjuchan97.site",
  job: "host",
};

// Getters
export interface IgettersPrams {
  name?: string;
  price?: string;
  job?: string;
}

export type gettersCallName = "addName" | "gettersCall";

const getters: GetterTree<IState, rootState> = {
  addName: (state) => (parms: IgettersPrams) => {
    return `${state.rootName} : ${parms.name}`;
  },
};

// Mutations
export interface ImutationsParms {
  job?: string;
}

export type mutationsCallName = "cahngeJob" | "mutationsCall";

const mutations: MutationTree<IState> = {
  cahngeJob: (state, payload: ImutationsParms) => {
    payload.job && (state.job = payload.job);

    state.rootName = `${state.rootName}_${payload.job}`;
  },
};

// actions
export type actionsCallName = "actionsCahnge" | "actionCall";

export interface IactionsParms {
  parms: string;
}

const actions: ActionTree<IState, rootState> = {
  actionsCahnge: async ({ commit }, payload: IactionsParms) => {
    const commitCall: mutationsCallName = "cahngeJob";
    const parms: ImutationsParms = { job: "게스트" };
    await setTimeout(() => {
      console.log(`actions payload : ${payload}`);
      commit(commitCall, parms);
    }, 1000);
  },
};

// module
export const module: Module<IState, rootState> = {
  // 호출할떄 [moduleName/호출] 로 호출
  // moduleName 은 modules에 정의된 모듈이름 따라감
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};
