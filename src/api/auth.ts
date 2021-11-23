import { store } from "@/store";
import { RootMutationsTypes } from "@/store/mutations";
import { LoginOutPutDto } from "@/assets/swagger";
import axios, { AxiosRequestConfig } from "axios";

export const AuthHeaders: AxiosRequestConfig = {
  headers: {
    acces_token: store.state.token || " ",
  },
  timeout: 500,
};

interface IBasicAuth {
  username: string;
  password: string;
}

export const logIn = async (auth: IBasicAuth): Promise<LoginOutPutDto> => {
  return axios
    .get("api/user", { auth })
    .then((res: any) => {
      const result: LoginOutPutDto = res.data;
      const { ok, token, err } = result;

      // 토큰 vuex에 저장 처리
      if (ok) {
        token && setToken(token);
      } else {
        console.log(err);
      }
      return result;
    })
    .catch((e) => e);
};

export const editUser = async (dsc: string): Promise<any> => {
  return await axios
    .patch("api/user", { dsc }, AuthHeaders)
    .then((res: any) => {
      return res.data;
    });
};

export const logOut = () => {
  restToken();
};

const setToken = (token: string) => {
  //@ts-ignore
  AuthHeaders.headers.acces_token = token;
  // localstorge 저장
  store.commit(RootMutationsTypes.SET_STATE_TOKEN, token);
};

const restToken = () => {
  //@ts-ignore
  AuthHeaders.headers.acces_token = "";
  store.commit(RootMutationsTypes.SET_STATE_TOKEN, " ");
};
