import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import { State as rootState } from "../index";
import { BodyMutations, BodyMutationTypes } from "@/store/mutations";
import { BodyGetters, BodyGettersTypes } from "@/store/getters";
import { BodyActions, BodyActionsTypes } from "@/store/actions";

export interface IState {
  name: string;
  age: number;
}

const state: IState = {
  name: "",
  age: 0,
};

const getters: GetterTree<IState, rootState> & BodyGetters = {
  [BodyGettersTypes.GET_BODY_STATE]: (state: IState) => {
    return {
      name: state.name,
      age: +state.age,
    };
  },
};

const mutations: MutationTree<IState> & BodyMutations = {
  [BodyMutationTypes.SET_BODY_NAME]: (
    state: IState,
    { name }: mutationsParms
  ) => {
    name && (state.name = name);
  },
};

const actions: ActionTree<IState, rootState> & BodyActions = {
  [BodyActionsTypes.acitons_basic]: (
    { commit }: ActionContext<IState, rootState>,
    { name }: actionsParms
  ) => {
    const setBodyName: mutationsParms = { name };
    commit(BodyMutationTypes.SET_BODY_NAME, setBodyName);
  },
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
}
export interface actionsParms {
  name?: string;
}

export class Body {
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
    Body._mutations = parms;

    return Body._mutations;
  }
  getters(parms: gettersParms) {
    Body._getters = parms;

    return Body._getters;
  }
  actions(parms: actionsParms) {
    Body._actions = parms;
    return Body._actions;
  }
}
