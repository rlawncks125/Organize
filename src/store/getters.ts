import { IState as BodyState } from "@/store/modules/Body";
import { IState as HeadState } from "@/store/modules/Haed";
// Body
export enum BodyGettersTypes {
  GET_BODY_STATE = "GET_BODY_STATE",
}

export type BodyGetters = {
  [BodyGettersTypes.GET_BODY_STATE](
    state: BodyState
  ): { name: string; age: number };
};

// Head
export enum HeadGettersTypes {
  GET_NAME_ADD_PARMS = "GET_NAME_ADD_PARMS",
}

export type HeadGetters = {
  [HeadGettersTypes.GET_NAME_ADD_PARMS](
    state: HeadState
  ): (addName: string) => string;
};

// base
import { IState as baseState } from "@/store/modules/base";
import { gettersParms as baseGettersParms } from "@/store/modules/base";

export enum BaseGettersTypes {
  GETTERS_BASE = "GETTERS_BASE",
}

export type BaseGetters = {
  [BaseGettersTypes.GETTERS_BASE](
    state: baseState
  ): (parms: baseGettersParms) => void;
};
