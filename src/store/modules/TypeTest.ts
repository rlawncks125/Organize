import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import {
  ActionType,
  TestActionPayloadMaps,
  TestActionReturnMaps,
} from "../actions";
import {
  GettersType,
  TestGettersParmsMaps,
  TestGettersReturnMaps,
} from "../getters";
import { State as rootState } from "../index";
import {
  TestMutationPayloadMaps,
  TestMutationReturnMaps,
  MutationType,
} from "../mutations";

export interface IState {
  name: string;
}

const state: IState = {
  name: "",
};

const getters: GetterTree<IState, rootState> & GettersTypes = {
  testGetters: (state) => ({ name }) => {
    return state.name + name;
  },
  testGetName: (state) => () => {
    return "sdw";
  },
};

const mutations: MutationTree<IState> & MutationTypes = {
  MuationTestType: (state, { name, age }) => {
    console.log(name, age);
    return 0;
  },
  TESTCHECK: (state, { test, price }) => {
    console.log(test, price);
    state.name = test;
  },
};

const actions: ActionTree<IState, rootState> & ActionsTypes = {
  ActionTestType: ({ commit }, { name, age }) => {
    console.log(name, age);
    return 0;
  },
  TwoTwo: ({ commit }, num) => {},
};

export const module: Module<IState, rootState> = {
  // 호출할떄 [moduleName/호출] 로 호출
  // moduleName 은 modules에 정의된 모듈이름 따라감
  // namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
};

export type GettersTypes = GettersType<
  IState,
  TestGettersParmsMaps,
  TestGettersReturnMaps
>;

export type MutationTypes = MutationType<
  IState, //
  TestMutationPayloadMaps,
  TestMutationReturnMaps
>;

type myActionContext = {
  commit<K extends keyof MutationTypes>(
    key: K,
    payload: Parameters<MutationTypes[K]>[1]
  ): ReturnType<MutationTypes[K]>;
} & Omit<ActionContext<IState, rootState>, "commit">;

export type ActionsTypes = ActionType<
  myActionContext,
  TestActionPayloadMaps,
  TestActionReturnMaps
>;
