import axios from "axios";
import { AuthHeaders } from "./auth";

interface IData {
  name: String;
  title: String;
}

export const getData = async (): Promise<string> => {
  return axios
    .get("api/auth/star", AuthHeaders)
    .then((res: any) => res.data)
    .catch((e) => e);
};
