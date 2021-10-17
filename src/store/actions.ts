import {
  IState as BodyState,
  actionsParms as BodyActionsParms,
} from "@/store/modules/Body";
import {
  IState as HaeState,
  actionsParms as HaedActionsParms,
} from "@/store/modules/Haed";
import { State as rootState } from "@/store/index";
import { ActionContext } from "vuex";

export enum BodyActionsTypes {
  acitons_basic = "acitons_basic",
}

export type BodyActions = {
  [BodyActionsTypes.acitons_basic](
    actionContext: ActionContext<BodyState, rootState>,
    payload?: BodyActionsParms
  ): void;
};

export enum HeadActionsTypes {
  HEAD_ACTIONS_BASIC = "HEAD_ACTIONS_BASIC",
}

export type HeadActions = {
  [HeadActionsTypes.HEAD_ACTIONS_BASIC](
    actionsContext: ActionContext<HaeState, rootState>,
    payload?: HaedActionsParms
  ): void;
};

import { IState as baseState } from "@/store/modules/base";
import { actionsParms as baseActionsParms } from "@/store/modules/base";

// base
export enum BaseActionsTypes {
  ACTIONS_BASE = "ACTIONS_BASE",
}

export type BaseActions = {
  [BaseActionsTypes.ACTIONS_BASE](
    actionContext: ActionContext<baseState, rootState>,
    paylaod: baseActionsParms
  ): void;
};
