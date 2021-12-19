import {
  IState as BodyState,
  actionsParms as BodyActionsParms,
} from "@/store/modules/Body";
import {
  IState as HaeState,
  actionsParms as HaedActionsParms,
} from "@/store/modules/Haed";
import { State as rootState } from "@/store/index";
import { ActionContext, ActionTree } from "vuex";

// body
export enum BodyActionsTypes {
  acitons_basic = "acitons_basic",
}

export type BodyActions = {
  [BodyActionsTypes.acitons_basic](
    actionContext: ActionContext<BodyState, rootState>,
    payload?: BodyActionsParms
  ): void;
};

// head
export enum HeadActionsTypes {
  HEAD_ACTIONS_BASIC = "HEAD_ACTIONS_BASIC",
}

export type HeadActions = {
  [HeadActionsTypes.HEAD_ACTIONS_BASIC](
    actionsContext: ActionContext<HaeState, rootState>,
    payload?: HaedActionsParms
  ): void;
};

// base
import { IState as baseState } from "@/store/modules/base";
import { actionsParms as baseActionsParms } from "@/store/modules/base";

export enum BaseActionsTypes {
  ACTIONS_BASE = "ACTIONS_BASE",
  PROMISE_TEST = "PROMISE_TEST",
}

export type BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE](
    actionContext: ActionContext<baseState, rootState>,
    paylaod: baseActionsParms
  ): void;
  [BaseActionsTypes.PROMISE_TEST](
    actionContext: ActionContext<baseState, rootState>,
    paylaod: baseActionsParms
  ): Promise<Boolean>;
};

// TypeTest

export type ActionType<T, U, V> = {
  [K in keyof (U | V)]: (actionContext: T, payload: U[K]) => V[K];
};

export interface TestActionPayloadMaps {
  ActionTestType: { name: string; age: number };
  TwoTwo: number;
}

export interface TestActionReturnMaps {
  ActionTestType: number;
  TwoTwo: void;
}
