/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class UserService {
  /**
   * 로그인
   */
  static userControllerLogin(options: IRequestOptions = {}): Promise<LoginOutPutDto> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 회원가입
   */
  static userControllerUserCreate(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 정보 변경
   */
  static userControllerUserUpdate(
    params: {
      /** requestBody */
      body?: UserUpdateDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user';

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * 삭제
   */
  static userControllerUseDelete(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/user';

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class WebScoketChatService {
  /**
   * CreateRoom
   */
  static wsControllerCreateRoomBody(
    params: {
      /** requestBody */
      body?: CreateRoomDtoInput;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<CreateRoomDtoOutPut> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/WebScoket/chat/CreateRoom';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface UserOutPut {
  /** 유저 이름입니다. */
  username?: string;

  /** 내용물 */
  dsc?: string;
}

export interface LoginOutPutDto {
  /** 성공 여부입니다. */
  ok: boolean;

  /** 에러 메세지입니다. */
  err?: string;

  /** 토큰 입니다. */
  token?: string;

  /**  */
  user: UserOutPut;
}

export interface UserUpdateDto {
  /** password */
  password?: string;

  /** 내용물 */
  dsc?: string;
}

export interface Postion {
  /** Lating X 좌표입니다. */
  x: number;

  /** Lating Y 좌표입니다. */
  y: number;
}

export interface CreateRoomDtoInput {
  /** 방 제목 입니다. */
  room: string;

  /** 방 시작 좌표입니다. */
  position: CombinedPositionTypes;
}

export interface CreateRoomDtoOutPut {
  /** 성공 여부입니다. */
  ok: boolean;

  /** 메세지 입니다. */
  message: string;

  /** Room 정보입니다. */
  room: string;
}
export type CombinedPositionTypes = Postion;
