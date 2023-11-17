import {ApiErrorResponse} from "./objects";

const Access_Control_Allow_Origin = "hazakura-api-test.kigawa.net"
const BASE_URL = "https://hazakura-api-test.kigawa.net/"

export class JsonError extends Error {
  url: URL | undefined
  init: RequestInit | undefined
  response: Response | undefined
  reason: any | undefined

  constructor(
    url: URL | undefined,
    init: RequestInit | undefined,
    response: Response | undefined,
    reason: any | undefined
  ) {
    super()
    this.url = url
    this.init = init
    this.response = response
    this.reason = reason
  }
}

export class ApiError extends Error {
  readonly apiErrorResponse: ApiErrorResponse

  constructor(apiErrorResponse: ApiErrorResponse) {
    super()
    this.apiErrorResponse = apiErrorResponse
  }
}

type HttpMethod = "GET" | "POST" | "PUT"

export class FetchBuilder<RESULT = never, BODY = never> {
  private _url: URL | string
  private _searchParams?: URLSearchParams | undefined
  private _body?: BODY | undefined
  private _method?: HttpMethod
  private _init?: RequestInit | undefined
  private _token?: string | undefined

  constructor(url: string, body: BODY = undefined) {
    this._url = url
    this._body = body
  }

  url(url: string): FetchBuilder<RESULT, BODY> {
    this._url = url
    return this
  }

  searchParams(searchParams: URLSearchParams | undefined): FetchBuilder<RESULT, BODY> {
    this._searchParams = searchParams
    return this
  }

  body(body: BODY | undefined): FetchBuilder<RESULT, BODY> {
    this._body = body
    return this
  }

  method(method: HttpMethod | undefined): FetchBuilder<RESULT, BODY> {
    this._method = method
    return this
  }

  init(init: RequestInit | undefined): FetchBuilder<RESULT, BODY> {
    this._init = init
    return this
  }

  token(token: string | undefined): FetchBuilder<RESULT, BODY> {
    this._token = token
    return this
  }


  fetch() {
    return fetchJson<RESULT, BODY>(this._url, this._searchParams, this._body, this._method, this._init, this._token)
  }
}

export async function fetchJson<RESULT = never, BODY = never>(
  url: URL | string,
  searchParams?: URLSearchParams | undefined,
  body?: BODY | undefined,
  method?: "GET" | "POST" | "PUT",
  init?: RequestInit | undefined,
  token?: string,
): Promise<RESULT> {
  const urlObj = setUrlDefault(url, searchParams)
  const initObj = setInitDefault(body, init, method, token)

  const res = await fetch(urlObj, initObj)

  if (res == undefined) {
    throw new JsonError(urlObj, initObj, res, undefined)
  }
  if (!res.ok) {
    throw new ApiError(await res.json())
  }
  return await res.json().catch((reason) => {
    console.error(url, reason)
    throw new JsonError(urlObj, initObj, res, reason)
  })
}

function setUrlDefault(
  url: string | URL,
  searchParams: URLSearchParams | undefined,
) {
  const urlObj = createURL(url)
  if (urlObj == undefined) {
    console.error("url is not valid")
    return undefined
  }
  const currentUrl = createURL(window.location.href)

  if (currentUrl != undefined && urlObj.host == currentUrl.host) {
    urlObj.protocol = currentUrl.protocol
  }

  if (searchParams != undefined) {
    searchParams.forEach((value, key) => {
      urlObj.searchParams.append(key, value)
    })
  }
  return urlObj
}

function setInitDefault<BODY = never>(
  body: BODY | undefined,
  init: RequestInit | undefined,
  method: "GET" | "POST" | "PUT",
  token?: string,
) {
  const initObj = getDefault(init, {})
  const headers = {...getDefault(initObj.headers, {})}
  headers["Content-Type"] = getDefault(headers["Content-Type"], "application/json")
  headers["Authorization"] = getDefault(headers["Authorization"], token)
  headers["Access-Control-Allow-Origin"] = getDefault(headers["Access-Control-Allow-Origin"], Access_Control_Allow_Origin)
  initObj.headers = headers
  if (body != null) initObj.body = JSON.stringify(body)
  if (method != null) initObj.method = method
  return initObj
}

export function createURL(url: URL | string): URL | undefined {
  try {
    return new URL(url, BASE_URL)
  } catch (e) {
    console.error(e)
    return undefined
  }
}

export function getDefault<T>(value: T | undefined, defaultValue: T): T {
  if (value == undefined) {
    return defaultValue
  }
  return value
}
