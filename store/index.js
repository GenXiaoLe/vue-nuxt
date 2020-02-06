// index.js在每次刷新初始化的时候都会执行，尤其适合放一些首屏渲染时候需要的状态
export const actions = {
    // nuxtServerInit刷新之后如果有的话，会被直接调用执行
    nuxtServerInit({ commit }, { app }) {
        // nuxt-universal-cookie用法如下
        // app是server实例也就是koa实例
        const token = app.$cookies.get("token");
        // 表名是登录用户
        if (token) {
            console.log("nuxtServerInit: token:"+token);
            commit("user/init", token);
        }
    }
};