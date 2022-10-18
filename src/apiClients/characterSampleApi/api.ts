/* tslint:disable */
/* eslint-disable */
/**
 * The Rick and Morty API
 * The Rick and Morty API는 캐릭터 정보를 제공하는 오픈 API입니다. react-query 샘플 API 용도로 사용합니다.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Configuration } from './configuration';
import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig,
} from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setApiKeyToObject,
  setBasicAuthToObject,
  setBearerAuthToObject,
  setOAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction,
} from './common';
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError,
} from './base';

/**
 *
 * @export
 * @interface CharacterError
 */
export interface CharacterError {
  /**
   *
   * @type {string}
   * @memberof CharacterError
   */
  error?: string;
}
/**
 *
 * @export
 * @interface CharacterResult
 */
export interface CharacterResult {
  /**
   *
   * @type {CharacterResultInfo}
   * @memberof CharacterResult
   */
  info?: CharacterResultInfo;
  /**
   * 결과 데이터 목록을 의미한다.
   * @type {Array<CharacterResultResultsInner>}
   * @memberof CharacterResult
   */
  results?: Array<CharacterResultResultsInner>;
}
/**
 * API의 현재 정보를 담고 있다.
 * @export
 * @interface CharacterResultInfo
 */
export interface CharacterResultInfo {
  /**
   * 문서의 총 개수를 의미한다.
   * @type {number}
   * @memberof CharacterResultInfo
   */
  count?: number;
  /**
   * 현재 문서의 페이지를 의미한다.
   * @type {number}
   * @memberof CharacterResultInfo
   */
  pages?: number;
  /**
   * 다음 문서의 페이지 주소를 리턴한다.
   * @type {string}
   * @memberof CharacterResultInfo
   */
  next?: string;
  /**
   * 이전 데이터를 의미한다.
   * @type {any}
   * @memberof CharacterResultInfo
   */
  prev?: any;
}
/**
 *
 * @export
 * @interface CharacterResultResultsInner
 */
export interface CharacterResultResultsInner {
  /**
   * 캐릭터의 유니크 ID를 의미한다.
   * @type {number}
   * @memberof CharacterResultResultsInner
   */
  id?: number;
  /**
   * 캐릭터 명을 의미한다.
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  name?: string;
  /**
   * 상태를 의미한다.
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  status?: string;
  /**
   * 캐릭터의 타입을 의미한다.
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  type?: string;
  /**
   * 캐릭터의 성별을 의미한다.
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  gender?: string;
  /**
   *
   * @type {CharacterResultResultsInnerOrigin}
   * @memberof CharacterResultResultsInner
   */
  origin?: CharacterResultResultsInnerOrigin;
  /**
   *
   * @type {CharacterResultResultsInnerLocation}
   * @memberof CharacterResultResultsInner
   */
  location?: CharacterResultResultsInnerLocation;
  /**
   * 이미지 소스
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  image?: string;
  /**
   * 에피소드
   * @type {Array<string>}
   * @memberof CharacterResultResultsInner
   */
  episode?: Array<string>;
  /**
   * url
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  url?: string;
  /**
   * 생성일자
   * @type {string}
   * @memberof CharacterResultResultsInner
   */
  created?: string;
}
/**
 * location
 * @export
 * @interface CharacterResultResultsInnerLocation
 */
export interface CharacterResultResultsInnerLocation {
  /**
   * location name
   * @type {string}
   * @memberof CharacterResultResultsInnerLocation
   */
  name?: string;
  /**
   * location url
   * @type {string}
   * @memberof CharacterResultResultsInnerLocation
   */
  url?: string;
}
/**
 * origin
 * @export
 * @interface CharacterResultResultsInnerOrigin
 */
export interface CharacterResultResultsInnerOrigin {
  /**
   * origin name
   * @type {string}
   * @memberof CharacterResultResultsInnerOrigin
   */
  name?: string;
  /**
   * url
   * @type {string}
   * @memberof CharacterResultResultsInnerOrigin
   */
  url?: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * 페이지 정보를 포함한 캐릭터 조회 REST API입니다
     * @summary 캐릭터 조회
     * @param {number} [page] 조회할 페이지 번호를 입력한다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCharacter: async (
      page?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/character`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: 'GET',
        ...baseOptions,
        ...options,
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (page !== undefined) {
        localVarQueryParameter['page'] = page;
      }

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers,
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration);
  return {
    /**
     * 페이지 정보를 포함한 캐릭터 조회 REST API입니다
     * @summary 캐릭터 조회
     * @param {number} [page] 조회할 페이지 번호를 입력한다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchCharacter(
      page?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CharacterResult>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.searchCharacter(
        page,
        options
      );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
  };
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DefaultApiFp(configuration);
  return {
    /**
     * 페이지 정보를 포함한 캐릭터 조회 REST API입니다
     * @summary 캐릭터 조회
     * @param {number} [page] 조회할 페이지 번호를 입력한다.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchCharacter(
      page?: number,
      options?: any
    ): AxiosPromise<CharacterResult> {
      return localVarFp
        .searchCharacter(page, options)
        .then((request) => request(axios, basePath));
    },
  };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
  /**
   * 페이지 정보를 포함한 캐릭터 조회 REST API입니다
   * @summary 캐릭터 조회
   * @param {number} [page] 조회할 페이지 번호를 입력한다.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DefaultApi
   */
  public searchCharacter(page?: number, options?: AxiosRequestConfig) {
    return DefaultApiFp(this.configuration)
      .searchCharacter(page, options)
      .then((request) => request(this.axios, this.basePath));
  }
}