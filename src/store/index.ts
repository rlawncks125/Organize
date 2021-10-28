import { InjectionKey } from "@vue/runtime-core";
import {
  createStore,
  MutationTree,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { module as Body, IState as BodyState } from "@/store/modules/Body";
import { module as Haed, IState as HeadState } from "@/store/modules/Haed";
import Base, { IState as baseState } from "@/store/modules/base";
import createPersistedState from "vuex-persistedstate";
import { RootMuations, RootMutationsTypes } from "./mutations";

export interface State {
  token: string;
  Body?: BodyState;
  Haed?: HeadState;
  Base?: baseState;
}

const mutations: MutationTree<State> & RootMuations = {
  [RootMutationsTypes.SET_STATE_TOKEN]: (state: State, token: string) => {
    token && (state.token = token);
  },
};

export const store = createStore<State>({
  state: {
    token: "",
  },
  mutations,
  actions: {},
  modules: {
    Body,
    Haed,
    Base,
  },
  plugins: [createPersistedState()],
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const useStoreState = () => useStore().state;
