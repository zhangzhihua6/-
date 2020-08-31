import axios from 'axios'
import iView from 'iview'
import {
  ResError
} from './error/ResError'
import sf from 'string-format'
import store from '@/store'
import {
  router
} from '@/router/index'
import config from '../config/index'

// const baseRequestUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.prod
// const baseRequestUrl = config.baseUrl.prod

const env = process.env.VUE_APP_ENV
const baseRequestUrl = config.baseUrl[env]

const axiosInstance = axios.create({
  baseURL: baseRequestUrl,
  timeout: 10000
})
axiosInstance.interceptors.request.use(function (config) {
  iView.LoadingBar.start()
  if (sessionStorage.getItem('X-Auth-Token')) {
    config.headers['X-Auth-Token'] = sessionStorage.getItem('X-Auth-Token')
  }
  return config
}, function (error) {
  iView.LoadingBar.finish()
  return Promise.reject(error)
})
axiosInstance.interceptors.response.use(res => {
  iView.LoadingBar.finish()
  // 401000表明身份异常或未登录
  if (res.data.status == 401000) {
    store.commit('setToken', '')
    store.commit('setAccess', [])
    localStorage.clear()
    window.location.href = '/#/login'
  }
  // 状态码不等于200000属于异常情况
  if (res.data.status != 200000) {
    throw new ResError(res.data.msg)
  }
  return res.data
}, error => {
  iView.LoadingBar.finish()
  throw new ResError('请求服务器失败，请检查服务是否正常！')
  return error
})

export const baseUrl = baseRequestUrl

export const get = (url, params, pathVariable = null) => {
  if (params == null) {
    params = {
      axios_timestamp_current: new Date().getTime()
    }
  } else {
    params.axios_timestamp_current = new Date().getTime()
  }
  return axiosInstance.get(sf(url, pathVariable), {
    params: params
  })
}

export const post = (url, params, pathVariable = null) => axiosInstance.post(sf(url, pathVariable), params)

export const put = (url, params, pathVariable = null) => axiosInstance.put(sf(url, pathVariable), params)

export const patch = (url, params, pathVariable = null) => axiosInstance.patch(sf(url, pathVariable), params)

export const del = (url, params, pathVariable = null) => axiosInstance.delete(sf(url, pathVariable), {
  params: params
})
