import { InjectionKey } from "@vue/runtime-core";
import {
  CommitOptions,
  createStore,
  MutationTree,
  Store,
  useStore as baseUseStore,
} from "vuex";
import { module as Body, IState as BodyState } from "@/store/modules/Body";
import { module as Haed, IState as HeadState } from "@/store/modules/Haed";
import {
  module as TypeTest,
  IState as TypeTestState,
} from "@/store/modules/TypeTest";
import Base, { IState as baseState } from "@/store/modules/base";
import createPersistedState from "vuex-persistedstate";
import { RootMuations, RootMutationsTypes } from "./mutations";

export interface State {
  token: string;
  Body?: BodyState;
  Haed?: HeadState;
  Base?: baseState;
  TypeTest?: TypeTestState;
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
    TypeTest,
  },
  plugins: [createPersistedState()],
});

export const key: InjectionKey<Store<State>> = Symbol();

export function useStore(): Store<State> {
  return baseUseStore(key);
}

export const useStoreState = () => useStore().state;

export function useTypeStore(): StoreType {
  const store: StoreType = baseUseStore(key);

  return baseUseStore(key);
}

import {
  MutationTypes as testMutationsTypes,
  GettersTypes as testGettersTypes,
  ActionsTypes as testActionsTypes,
} from "./modules/TypeTest";

type MutationsTypes = testMutationsTypes;
type ActionsTypes = testActionsTypes;
type GettersTypes = testGettersTypes;

type StoreType = Omit<Store<State>, "getters" | "commit" | "dispatch"> & {
  commit<
    K extends keyof MutationsTypes,
    P extends Parameters<MutationsTypes[K]>[1]
  >(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<MutationsTypes[K]>;
} & {
  dispatch<K extends keyof ActionsTypes>(
    key: K,
    payload: Parameters<ActionsTypes[K]>[1],
    options?: ActionsTypes
  ): ReturnType<ActionsTypes[K]>;
} & {
  getters: {
    [K in keyof GettersTypes]: ReturnType<GettersTypes[K]>;
  };
};
