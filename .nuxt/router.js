import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ec82cb0 = () => interopDefault(import('../pages/list.vue' /* webpackChunkName: "pages/list" */))
const _397abb4a = () => interopDefault(import('../pages/list/_id.vue' /* webpackChunkName: "pages/list/_id" */))
const _3f598c47 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _31d7f06e = () => interopDefault(import('../pages/other.vue' /* webpackChunkName: "pages/other" */))
const _75b1e930 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/list",
    component: _7ec82cb0,
    name: "list",
    children: [{
      path: ":id?",
      component: _397abb4a,
      name: "list-id"
    }]
  }, {
    path: "/login",
    component: _3f598c47,
    name: "login"
  }, {
    path: "/other",
    component: _31d7f06e,
    name: "other"
  }, {
    path: "/",
    component: _75b1e930,
    name: "index"
  }, {
    path: "/foo",
    component: _31d7f06e
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
