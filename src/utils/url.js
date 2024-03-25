export const createRoutePathId = (baseUrl, paramId = ":id") => {
  return `${baseUrl}/${paramId}`
}
export const encodeQueryData = params => {
  const paramsDefault = {
    page: 1,
    limit: 20,
  }

  const dataCombine = { ...paramsDefault, ...params }

  const ret = []

  for (const d in dataCombine) {
    if (dataCombine[d]) {
      ret.push(encodeURIComponent(d) + "=" + encodeURIComponent(dataCombine[d]))
    }
  }

  return ret.join("&")
}

export const createApiUrl = (pathname, params) => {
  if (!pathname) return ""

  if (!params) return pathname

  return pathname + "?" + encodeQueryData(params)
}
