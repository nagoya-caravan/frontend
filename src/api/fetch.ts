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
) {
    const initObj = getDefault(init, {})
    const headers = {...getDefault(initObj.headers, {})}
    headers["Content-Type"] = getDefault(headers["Content-Type"], "application/json")
    headers["Access-Control-Allow-Origin"] = getDefault(headers["Access-Control-Allow-Origin"], Access_Control_Allow_Origin)
    initObj.headers = headers
    if (body != null) initObj.body = JSON.stringify(body)
    if (method != null) initObj.method = method
    return initObj
}

export async function fetchJson<RESULT = never, BODY = never>(
    url: URL | string,
    searchParams?: URLSearchParams | undefined,
    body?: BODY | undefined,
    method?: "GET" | "POST" | "PUT",
    init?: RequestInit | undefined,
): Promise<RESULT> {
    const urlObj = setUrlDefault(url, searchParams)
    const initObj = setInitDefault(body, init, method)

    const res = await fetch(urlObj, initObj)

    if (res == undefined) {
        throw new JsonError(urlObj, initObj, res, undefined)
    }
    if (!res.ok) {
        console.error(urlObj, res.status, res.statusText)
        throw new JsonError(urlObj, initObj, res, res.statusText)
    }
    return await res.json().catch((reason) => {
        console.error(url, reason)
        throw new JsonError(urlObj, initObj, res, reason)
    })
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
