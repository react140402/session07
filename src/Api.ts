/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface LoginRequest {
  /** @format email */
  email: string;
  /** @format password */
  password: string;
}

export interface RegisterRequest {
  /** @format email */
  email: string;
  /** @format password */
  password: string;
}

export interface TokenResponse {
  token: string;
}

export interface PostsModel {
  /** @format int32 */
  userId?: number;
  /** @format int32 */
  id?: number;
  title?: string;
  body?: string;
}

export interface PostsCreateModel {
  /** @format int32 */
  userId?: number;
  title?: string;
  body?: string;
}

export type PostsModelList = PostsModel[];

export interface TodoModel {
  /** @format int32 */
  id?: number;
  title?: string;
  done?: boolean;
}

export interface TodoCreateModel {
  title?: string;
  done?: boolean;
}

export type TodoModelList = TodoModel[];

export interface UsersModel {
  /** @format int32 */
  id?: number;
  userName?: string;
  email?: string;
  passs?: string;
  isActive?: boolean;
}

export interface UsersCreateModel {
  userName?: string;
  email?: string;
  passs?: string;
  isActive?: boolean;
}

export type UsersModelList = UsersModel[];

export interface AdvieModel {
  Name?: string;
  Tozih?: string;
  khavas?: string;
  mazerat?: string;
  /** @format int32 */
  fav?: number;
  /** @format int32 */
  id?: number;
}

export interface AdvieCreateModel {
  Name?: string;
  Tozih?: string;
  khavas?: string;
  mazerat?: string;
  /** @format int32 */
  fav?: number;
}

export type AdvieModelList = AdvieModel[];

export interface AraghijatModel {
  Name?: string;
  Tabiat?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
  /** @format int32 */
  id?: number;
}

export interface AraghijatCreateModel {
  Name?: string;
  Tabiat?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
}

export type AraghijatModelList = AraghijatModel[];

export interface AsalModel {
  Name?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
  /** @format int32 */
  id?: number;
}

export interface AsalCreateModel {
  Name?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
}

export type AsalModelList = AsalModel[];

export interface DamnoshModel {
  Name?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
  /** @format int32 */
  id?: number;
}

export interface DamnoshCreateModel {
  Name?: string;
  Content?: string;
  /** @format int32 */
  fav?: number;
}

export type DamnoshModelList = DamnoshModel[];

export interface DarokhanehModel {
  City?: string;
  Location?: string;
  Name?: string;
  Specific?: string;
  Founder?: string;
  Address?: string;
  /** @format int32 */
  fav?: number;
  /** @format int32 */
  id?: number;
}

export interface DarokhanehCreateModel {
  City?: string;
  Location?: string;
  Name?: string;
  Specific?: string;
  Founder?: string;
  Address?: string;
  /** @format int32 */
  fav?: number;
}

export type DarokhanehModelList = DarokhanehModel[];

export interface CategoryModel {
  /** @format int32 */
  id?: number;
  name?: string;
  persianName?: string;
}

export interface CategoryCreateModel {
  name?: string;
  persianName?: string;
}

export type CategoryModelList = CategoryModel[];

export interface DrugsModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  categoryId?: number;
  name?: string;
  usage?: string;
  mechanism?: string;
  pharmaco?: string;
  noUsage?: string;
  warning?: string;
  avarez?: string;
  tadakhol?: string;
  notes?: string;
  meghdarMasraf?: string;
  ashkal?: string;
  isFavorit?: object;
}

export interface DrugsCreateModel {
  /** @format int32 */
  categoryId?: number;
  name?: string;
  usage?: string;
  mechanism?: string;
  pharmaco?: string;
  noUsage?: string;
  warning?: string;
  avarez?: string;
  tadakhol?: string;
  notes?: string;
  meghdarMasraf?: string;
  ashkal?: string;
  isFavorit?: object;
}

export type DrugsModelList = DrugsModel[];

export interface FruitModel {
  /** @format int32 */
  id?: number;
  title?: string;
  content?: string;
  /** @format int32 */
  fav?: number;
}

export interface FruitCreateModel {
  title?: string;
  content?: string;
  /** @format int32 */
  fav?: number;
}

export type FruitModelList = FruitModel[];

export interface LabContentModel {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  title?: string;
  content?: string;
}

export interface LabContentCreateModel {
  /** @format int32 */
  number?: number;
  title?: string;
  content?: string;
}

export type LabContentModelList = LabContentModel[];

export interface LabMainModel {
  /** @format int32 */
  id?: number;
  faName?: string;
  enName?: string;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  fav?: number;
}

export interface LabMainCreateModel {
  faName?: string;
  enName?: string;
  /** @format int32 */
  type?: number;
  /** @format int32 */
  fav?: number;
}

export type LabMainModelList = LabMainModel[];

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
          method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== "string"
    ) {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Fake JSON Server
 * @version 0.1
 *
 * OpenAPI Schema generated by pashaie@gmail.com
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name Login
     * @summary Login
     * @request POST:/auth/login
     */
    login: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, void>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name Register
     * @summary Register
     * @request POST:/auth/register
     */
    register: (data: RegisterRequest, params: RequestParams = {}) =>
      this.request<TokenResponse, void>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  posts = {
    /**
     * No description
     *
     * @tags Posts
     * @name GetAllPosts
     * @summary Get all Posts
     * @request GET:/posts
     */
    getAllPosts: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PostsModelList, any>({
        path: `/posts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name CreatePosts
     * @summary Create Posts
     * @request POST:/posts
     */
    createPosts: (data: PostsCreateModel, params: RequestParams = {}) =>
      this.request<PostsModel, any>({
        path: `/posts`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name GetPostsById
     * @summary Get Posts by ID
     * @request GET:/posts/{id}
     */
    getPostsById: (id: number, params: RequestParams = {}) =>
      this.request<PostsModel, void>({
        path: `/posts/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name UpdatePosts
     * @summary Update Posts by ID
     * @request PUT:/posts/{id}
     */
    updatePosts: (id: number, data: PostsModel, params: RequestParams = {}) =>
      this.request<PostsModel, any>({
        path: `/posts/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name DeletePosts
     * @summary Delete Posts by ID
     * @request DELETE:/posts/{id}
     */
    deletePosts: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/posts/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Posts
     * @name PatchPosts
     * @summary Partially update Posts by ID
     * @request PATCH:/posts/{id}
     */
    patchPosts: (
      id: number,
      data: PostsCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<PostsCreateModel, any>({
        path: `/posts/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  todo = {
    /**
     * No description
     *
     * @tags Todo
     * @name GetAllTodo
     * @summary Get all Todo
     * @request GET:/todo
     */
    getAllTodo: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<TodoModelList, any>({
        path: `/todo`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Todo
     * @name CreateTodo
     * @summary Create Todo
     * @request POST:/todo
     */
    createTodo: (data: TodoCreateModel, params: RequestParams = {}) =>
      this.request<TodoModel, any>({
        path: `/todo`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Todo
     * @name GetTodoById
     * @summary Get Todo by ID
     * @request GET:/todo/{id}
     */
    getTodoById: (id: number, params: RequestParams = {}) =>
      this.request<TodoModel, void>({
        path: `/todo/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Todo
     * @name UpdateTodo
     * @summary Update Todo by ID
     * @request PUT:/todo/{id}
     */
    updateTodo: (id: number, data: TodoModel, params: RequestParams = {}) =>
      this.request<TodoModel, any>({
        path: `/todo/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Todo
     * @name DeleteTodo
     * @summary Delete Todo by ID
     * @request DELETE:/todo/{id}
     */
    deleteTodo: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/todo/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Todo
     * @name PatchTodo
     * @summary Partially update Todo by ID
     * @request PATCH:/todo/{id}
     */
    patchTodo: (
      id: number,
      data: TodoCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<TodoCreateModel, any>({
        path: `/todo/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags Users
     * @name GetAllUsers
     * @summary Get all Users
     * @request GET:/users
     */
    getAllUsers: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<UsersModelList, any>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name CreateUsers
     * @summary Create Users
     * @request POST:/users
     */
    createUsers: (data: UsersCreateModel, params: RequestParams = {}) =>
      this.request<UsersModel, any>({
        path: `/users`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name GetUsersById
     * @summary Get Users by ID
     * @request GET:/users/{id}
     */
    getUsersById: (id: number, params: RequestParams = {}) =>
      this.request<UsersModel, void>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name UpdateUsers
     * @summary Update Users by ID
     * @request PUT:/users/{id}
     */
    updateUsers: (id: number, data: UsersModel, params: RequestParams = {}) =>
      this.request<UsersModel, any>({
        path: `/users/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name DeleteUsers
     * @summary Delete Users by ID
     * @request DELETE:/users/{id}
     */
    deleteUsers: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name PatchUsers
     * @summary Partially update Users by ID
     * @request PATCH:/users/{id}
     */
    patchUsers: (
      id: number,
      data: UsersCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<UsersCreateModel, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  advie = {
    /**
     * No description
     *
     * @tags Advie
     * @name GetAllAdvie
     * @summary Get all Advie
     * @request GET:/advie
     */
    getAllAdvie: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AdvieModelList, any>({
        path: `/advie`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advie
     * @name CreateAdvie
     * @summary Create Advie
     * @request POST:/advie
     */
    createAdvie: (data: AdvieCreateModel, params: RequestParams = {}) =>
      this.request<AdvieModel, any>({
        path: `/advie`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advie
     * @name GetAdvieById
     * @summary Get Advie by ID
     * @request GET:/advie/{id}
     */
    getAdvieById: (id: number, params: RequestParams = {}) =>
      this.request<AdvieModel, void>({
        path: `/advie/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advie
     * @name UpdateAdvie
     * @summary Update Advie by ID
     * @request PUT:/advie/{id}
     */
    updateAdvie: (id: number, data: AdvieModel, params: RequestParams = {}) =>
      this.request<AdvieModel, any>({
        path: `/advie/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advie
     * @name DeleteAdvie
     * @summary Delete Advie by ID
     * @request DELETE:/advie/{id}
     */
    deleteAdvie: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/advie/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Advie
     * @name PatchAdvie
     * @summary Partially update Advie by ID
     * @request PATCH:/advie/{id}
     */
    patchAdvie: (
      id: number,
      data: AdvieCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<AdvieCreateModel, any>({
        path: `/advie/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  araghijat = {
    /**
     * No description
     *
     * @tags Araghijat
     * @name GetAllAraghijat
     * @summary Get all Araghijat
     * @request GET:/araghijat
     */
    getAllAraghijat: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AraghijatModelList, any>({
        path: `/araghijat`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Araghijat
     * @name CreateAraghijat
     * @summary Create Araghijat
     * @request POST:/araghijat
     */
    createAraghijat: (data: AraghijatCreateModel, params: RequestParams = {}) =>
      this.request<AraghijatModel, any>({
        path: `/araghijat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Araghijat
     * @name GetAraghijatById
     * @summary Get Araghijat by ID
     * @request GET:/araghijat/{id}
     */
    getAraghijatById: (id: number, params: RequestParams = {}) =>
      this.request<AraghijatModel, void>({
        path: `/araghijat/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Araghijat
     * @name UpdateAraghijat
     * @summary Update Araghijat by ID
     * @request PUT:/araghijat/{id}
     */
    updateAraghijat: (
      id: number,
      data: AraghijatModel,
      params: RequestParams = {},
    ) =>
      this.request<AraghijatModel, any>({
        path: `/araghijat/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Araghijat
     * @name DeleteAraghijat
     * @summary Delete Araghijat by ID
     * @request DELETE:/araghijat/{id}
     */
    deleteAraghijat: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/araghijat/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Araghijat
     * @name PatchAraghijat
     * @summary Partially update Araghijat by ID
     * @request PATCH:/araghijat/{id}
     */
    patchAraghijat: (
      id: number,
      data: AraghijatCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<AraghijatCreateModel, any>({
        path: `/araghijat/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  asal = {
    /**
     * No description
     *
     * @tags Asal
     * @name GetAllAsal
     * @summary Get all Asal
     * @request GET:/asal
     */
    getAllAsal: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AsalModelList, any>({
        path: `/asal`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Asal
     * @name CreateAsal
     * @summary Create Asal
     * @request POST:/asal
     */
    createAsal: (data: AsalCreateModel, params: RequestParams = {}) =>
      this.request<AsalModel, any>({
        path: `/asal`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Asal
     * @name GetAsalById
     * @summary Get Asal by ID
     * @request GET:/asal/{id}
     */
    getAsalById: (id: number, params: RequestParams = {}) =>
      this.request<AsalModel, void>({
        path: `/asal/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Asal
     * @name UpdateAsal
     * @summary Update Asal by ID
     * @request PUT:/asal/{id}
     */
    updateAsal: (id: number, data: AsalModel, params: RequestParams = {}) =>
      this.request<AsalModel, any>({
        path: `/asal/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Asal
     * @name DeleteAsal
     * @summary Delete Asal by ID
     * @request DELETE:/asal/{id}
     */
    deleteAsal: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/asal/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Asal
     * @name PatchAsal
     * @summary Partially update Asal by ID
     * @request PATCH:/asal/{id}
     */
    patchAsal: (
      id: number,
      data: AsalCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<AsalCreateModel, any>({
        path: `/asal/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  damnosh = {
    /**
     * No description
     *
     * @tags Damnosh
     * @name GetAllDamnosh
     * @summary Get all Damnosh
     * @request GET:/damnosh
     */
    getAllDamnosh: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DamnoshModelList, any>({
        path: `/damnosh`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Damnosh
     * @name CreateDamnosh
     * @summary Create Damnosh
     * @request POST:/damnosh
     */
    createDamnosh: (data: DamnoshCreateModel, params: RequestParams = {}) =>
      this.request<DamnoshModel, any>({
        path: `/damnosh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Damnosh
     * @name GetDamnoshById
     * @summary Get Damnosh by ID
     * @request GET:/damnosh/{id}
     */
    getDamnoshById: (id: number, params: RequestParams = {}) =>
      this.request<DamnoshModel, void>({
        path: `/damnosh/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Damnosh
     * @name UpdateDamnosh
     * @summary Update Damnosh by ID
     * @request PUT:/damnosh/{id}
     */
    updateDamnosh: (
      id: number,
      data: DamnoshModel,
      params: RequestParams = {},
    ) =>
      this.request<DamnoshModel, any>({
        path: `/damnosh/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Damnosh
     * @name DeleteDamnosh
     * @summary Delete Damnosh by ID
     * @request DELETE:/damnosh/{id}
     */
    deleteDamnosh: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/damnosh/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Damnosh
     * @name PatchDamnosh
     * @summary Partially update Damnosh by ID
     * @request PATCH:/damnosh/{id}
     */
    patchDamnosh: (
      id: number,
      data: DamnoshCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<DamnoshCreateModel, any>({
        path: `/damnosh/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  darokhaneh = {
    /**
     * No description
     *
     * @tags Darokhaneh
     * @name GetAllDarokhaneh
     * @summary Get all Darokhaneh
     * @request GET:/darokhaneh
     */
    getAllDarokhaneh: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DarokhanehModelList, any>({
        path: `/darokhaneh`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Darokhaneh
     * @name CreateDarokhaneh
     * @summary Create Darokhaneh
     * @request POST:/darokhaneh
     */
    createDarokhaneh: (
      data: DarokhanehCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<DarokhanehModel, any>({
        path: `/darokhaneh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Darokhaneh
     * @name GetDarokhanehById
     * @summary Get Darokhaneh by ID
     * @request GET:/darokhaneh/{id}
     */
    getDarokhanehById: (id: number, params: RequestParams = {}) =>
      this.request<DarokhanehModel, void>({
        path: `/darokhaneh/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Darokhaneh
     * @name UpdateDarokhaneh
     * @summary Update Darokhaneh by ID
     * @request PUT:/darokhaneh/{id}
     */
    updateDarokhaneh: (
      id: number,
      data: DarokhanehModel,
      params: RequestParams = {},
    ) =>
      this.request<DarokhanehModel, any>({
        path: `/darokhaneh/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Darokhaneh
     * @name DeleteDarokhaneh
     * @summary Delete Darokhaneh by ID
     * @request DELETE:/darokhaneh/{id}
     */
    deleteDarokhaneh: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/darokhaneh/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Darokhaneh
     * @name PatchDarokhaneh
     * @summary Partially update Darokhaneh by ID
     * @request PATCH:/darokhaneh/{id}
     */
    patchDarokhaneh: (
      id: number,
      data: DarokhanehCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<DarokhanehCreateModel, any>({
        path: `/darokhaneh/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  category = {
    /**
     * No description
     *
     * @tags Category
     * @name GetAllCategory
     * @summary Get all Category
     * @request GET:/category
     */
    getAllCategory: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CategoryModelList, any>({
        path: `/category`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name CreateCategory
     * @summary Create Category
     * @request POST:/category
     */
    createCategory: (data: CategoryCreateModel, params: RequestParams = {}) =>
      this.request<CategoryModel, any>({
        path: `/category`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name GetCategoryById
     * @summary Get Category by ID
     * @request GET:/category/{id}
     */
    getCategoryById: (id: number, params: RequestParams = {}) =>
      this.request<CategoryModel, void>({
        path: `/category/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name UpdateCategory
     * @summary Update Category by ID
     * @request PUT:/category/{id}
     */
    updateCategory: (
      id: number,
      data: CategoryModel,
      params: RequestParams = {},
    ) =>
      this.request<CategoryModel, any>({
        path: `/category/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name DeleteCategory
     * @summary Delete Category by ID
     * @request DELETE:/category/{id}
     */
    deleteCategory: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/category/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Category
     * @name PatchCategory
     * @summary Partially update Category by ID
     * @request PATCH:/category/{id}
     */
    patchCategory: (
      id: number,
      data: CategoryCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<CategoryCreateModel, any>({
        path: `/category/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  drugs = {
    /**
     * No description
     *
     * @tags Drugs
     * @name GetAllDrugs
     * @summary Get all Drugs
     * @request GET:/drugs
     */
    getAllDrugs: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DrugsModelList, any>({
        path: `/drugs`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Drugs
     * @name CreateDrugs
     * @summary Create Drugs
     * @request POST:/drugs
     */
    createDrugs: (data: DrugsCreateModel, params: RequestParams = {}) =>
      this.request<DrugsModel, any>({
        path: `/drugs`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Drugs
     * @name GetDrugsById
     * @summary Get Drugs by ID
     * @request GET:/drugs/{id}
     */
    getDrugsById: (id: number, params: RequestParams = {}) =>
      this.request<DrugsModel, void>({
        path: `/drugs/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Drugs
     * @name UpdateDrugs
     * @summary Update Drugs by ID
     * @request PUT:/drugs/{id}
     */
    updateDrugs: (id: number, data: DrugsModel, params: RequestParams = {}) =>
      this.request<DrugsModel, any>({
        path: `/drugs/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Drugs
     * @name DeleteDrugs
     * @summary Delete Drugs by ID
     * @request DELETE:/drugs/{id}
     */
    deleteDrugs: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/drugs/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Drugs
     * @name PatchDrugs
     * @summary Partially update Drugs by ID
     * @request PATCH:/drugs/{id}
     */
    patchDrugs: (
      id: number,
      data: DrugsCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<DrugsCreateModel, any>({
        path: `/drugs/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  fruit = {
    /**
     * No description
     *
     * @tags Fruit
     * @name GetAllFruit
     * @summary Get all Fruit
     * @request GET:/fruit
     */
    getAllFruit: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<FruitModelList, any>({
        path: `/fruit`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fruit
     * @name CreateFruit
     * @summary Create Fruit
     * @request POST:/fruit
     */
    createFruit: (data: FruitCreateModel, params: RequestParams = {}) =>
      this.request<FruitModel, any>({
        path: `/fruit`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fruit
     * @name GetFruitById
     * @summary Get Fruit by ID
     * @request GET:/fruit/{id}
     */
    getFruitById: (id: number, params: RequestParams = {}) =>
      this.request<FruitModel, void>({
        path: `/fruit/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fruit
     * @name UpdateFruit
     * @summary Update Fruit by ID
     * @request PUT:/fruit/{id}
     */
    updateFruit: (id: number, data: FruitModel, params: RequestParams = {}) =>
      this.request<FruitModel, any>({
        path: `/fruit/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fruit
     * @name DeleteFruit
     * @summary Delete Fruit by ID
     * @request DELETE:/fruit/{id}
     */
    deleteFruit: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/fruit/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Fruit
     * @name PatchFruit
     * @summary Partially update Fruit by ID
     * @request PATCH:/fruit/{id}
     */
    patchFruit: (
      id: number,
      data: FruitCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<FruitCreateModel, any>({
        path: `/fruit/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  labContent = {
    /**
     * No description
     *
     * @tags LabContent
     * @name GetAllLabContent
     * @summary Get all LabContent
     * @request GET:/labContent
     */
    getAllLabContent: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LabContentModelList, any>({
        path: `/labContent`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabContent
     * @name CreateLabContent
     * @summary Create LabContent
     * @request POST:/labContent
     */
    createLabContent: (
      data: LabContentCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<LabContentModel, any>({
        path: `/labContent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabContent
     * @name GetLabContentById
     * @summary Get LabContent by ID
     * @request GET:/labContent/{id}
     */
    getLabContentById: (id: number, params: RequestParams = {}) =>
      this.request<LabContentModel, void>({
        path: `/labContent/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabContent
     * @name UpdateLabContent
     * @summary Update LabContent by ID
     * @request PUT:/labContent/{id}
     */
    updateLabContent: (
      id: number,
      data: LabContentModel,
      params: RequestParams = {},
    ) =>
      this.request<LabContentModel, any>({
        path: `/labContent/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabContent
     * @name DeleteLabContent
     * @summary Delete LabContent by ID
     * @request DELETE:/labContent/{id}
     */
    deleteLabContent: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labContent/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabContent
     * @name PatchLabContent
     * @summary Partially update LabContent by ID
     * @request PATCH:/labContent/{id}
     */
    patchLabContent: (
      id: number,
      data: LabContentCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<LabContentCreateModel, any>({
        path: `/labContent/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  labMain = {
    /**
     * No description
     *
     * @tags LabMain
     * @name GetAllLabMain
     * @summary Get all LabMain
     * @request GET:/labMain
     */
    getAllLabMain: (
      query?: {
        /** Full-text search */
        q?: string;
        /** Sort direction: desc|asc */
        _order?: string;
        /** Sort field */
        _sort?: string;
        _page?: number;
        _limit?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<LabMainModelList, any>({
        path: `/labMain`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabMain
     * @name CreateLabMain
     * @summary Create LabMain
     * @request POST:/labMain
     */
    createLabMain: (data: LabMainCreateModel, params: RequestParams = {}) =>
      this.request<LabMainModel, any>({
        path: `/labMain`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabMain
     * @name GetLabMainById
     * @summary Get LabMain by ID
     * @request GET:/labMain/{id}
     */
    getLabMainById: (id: number, params: RequestParams = {}) =>
      this.request<LabMainModel, void>({
        path: `/labMain/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabMain
     * @name UpdateLabMain
     * @summary Update LabMain by ID
     * @request PUT:/labMain/{id}
     */
    updateLabMain: (
      id: number,
      data: LabMainModel,
      params: RequestParams = {},
    ) =>
      this.request<LabMainModel, any>({
        path: `/labMain/${id}`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabMain
     * @name DeleteLabMain
     * @summary Delete LabMain by ID
     * @request DELETE:/labMain/{id}
     */
    deleteLabMain: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/labMain/${id}`,
        method: "DELETE",
        ...params,
      }),

    /**
     * No description
     *
     * @tags LabMain
     * @name PatchLabMain
     * @summary Partially update LabMain by ID
     * @request PATCH:/labMain/{id}
     */
    patchLabMain: (
      id: number,
      data: LabMainCreateModel,
      params: RequestParams = {},
    ) =>
      this.request<LabMainCreateModel, any>({
        path: `/labMain/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
