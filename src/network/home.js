import { request } from './request'

/**
 * 获取轮播图等数据
 */
export function getHomeMultidata() {
  return request({
    method: 'get',
    url: 'home/multidata'
  })
}

/**
 * 请求首页goods数据
 * @param {*} type 
 * @param {*} page 
 */
export function getHomeGoods(type, page) {
  return request({
    method: 'get',
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}