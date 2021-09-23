import { Module, MutationTree } from "vuex";
import { State as rootState } from "../index";

export interface IState {
  name: string;
  age: number;
}

export type gettersCallType = "addName" | "removeModuleName";

export interface gettersPrams {
  name?: string;
  age?: number;
  options?: any;
}

export type mutationsCallType = "changeName" | "testCall";

export interface MutationsPrams {
  name?: string;
  title?: string;
}

export const module: Module<IState, rootState> = {
  // 호출할떄 [moduleName/호출] 로 호출
  // moduleName 은 modules에 정의된 모듈이름 따라감
  namespaced: true,
  state: {
    name: "moduleA",
    age: 2,
  },
  getters: {
    // 파라미터 사용시
    addName: (state) => ({ name }: gettersPrams): string => {
      return `${state.name}+${name}`;
    },
    // 파라미터 사용안할시
    removeModuleName: (state): string => {
      console.log(`state 변경 감지`);
      return state.name.slice(0, 4);
    },
  },
  mutations: {
    changeName(state, { name }: MutationsPrams) {
      if (name) {
        state.name = name;
      }
    },
  },
  actions: {
    changeName(context) {
      context.commit("changeName", { name: "actionsCm" });
    },
  },
  modules: {},
};
