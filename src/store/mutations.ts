import {
  IState as BodyState,
  mutationsParms as BodyMutationsParms,
} from "@/store/modules/Body";
import {
  IState as HeadState,
  mutationsParms as HaedMutationsParms,
} from "@/store/modules/Haed";
import { State as RootState, State } from "@/store/index";

// Root
export enum RootMutationsTypes {
  SET_STATE_TOKEN = "SET_STATE_TOKEN",
}

export type RootMuations = {
  [RootMutationsTypes.SET_STATE_TOKEN](state: RootState, token: String): void;
};

// Body
export enum BodyMutationTypes {
  SET_BODY_NAME = "SET_BODY_NAME",
}

export type BodyMutations = {
  [BodyMutationTypes.SET_BODY_NAME](
    state: BodyState,
    payload: BodyMutationsParms
  ): void;
};

// Head
export enum HeadMuationsTypes {
  SET_HAED_NAME = "SET_HAED_NAME",
  SET_HAED_AGE = "SET_HAED_AGE",
}

export type HeadMutations = {
  [HeadMuationsTypes.SET_HAED_NAME](
    state: HeadState,
    name: HaedMutationsParms
  ): void;
  [HeadMuationsTypes.SET_HAED_AGE](
    state: HeadState,
    age: HaedMutationsParms
  ): void;
};

// base
import { IState as baseState } from "@/store/modules/base";
import { mutationsParms as baseMuationsParms } from "@/store/modules/base";

export enum BaseMuationsTypes {
  MUTATIONS_BASE = "MUTATIONS_BASE",
}

export type BaseMutations = {
  [BaseMuationsTypes.MUTATIONS_BASE](
    state: baseState,
    payload: baseMuationsParms
  ): void;
};

// TypeTest
export type MutationType<T, U, V> = {
  [K in keyof (U | V)]: (state: T, payload: U[K]) => V[K];
};
export interface TestMutationPayloadMaps {
  MuationTestType: { name: string; age: number };
  TESTCHECK: { test: string; price: number };
}
export interface TestMutationReturnMaps {
  MuationTestType: number;
  TESTCHECK: void;
}
