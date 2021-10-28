import { store } from "@/store";
import { RootMutationsTypes } from "@/store/mutations";
import { LoginOutPutDto } from "@/swagger";
import axios, { AxiosRequestConfig } from "axios";

export const AuthHeaders: AxiosRequestConfig = {
  headers: {
    acces_token: store.state.token || " ",
  },
  timeout: 500,
};

export const logIn = async (
  username: string,
  password: string
): Promise<LoginOutPutDto> => {
  return axios
    .get("api/user", {
      auth: { username, password },
    })
    .then((res: any) => {
      const result: LoginOutPutDto = res.data;
      const { ok, token, err } = result;
      console.log(err);
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
