import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { module as moduleA, IState as StateA } from "./modules/moduleA";
import { module as Head, IState as HeadState } from "./modules/Haed";

export interface State {
  token: string;
  moduleA?: StateA;
  Head?: HeadState;
}

export const store = createStore<State>({
  state: {
    token: "ZER00aWW--SWAs",
  },
  mutations: {},
  actions: {},
  modules: {
    moduleA,
    Head,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const useStoreState = () => useStore().state;
