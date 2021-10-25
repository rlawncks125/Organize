import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import { module as Body, IState as BodyState } from "@/store/modules/Body";
import { module as Haed, IState as HeadState } from "@/store/modules/Haed";
import Base, { IState as baseState } from "@/store/modules/base";

export interface State {
  token: string;
  Body?: BodyState;
  Haed?: HeadState;
  Base?: baseState;
}

export const store = createStore<State>({
  state: {
    token: "ZER00aWW--SWAs",
  },
  mutations: {},
  actions: {},
  modules: {
    Body,
    Haed,
    Base,
  },
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const useStoreState = () => useStore().state;
