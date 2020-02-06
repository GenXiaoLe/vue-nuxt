<template>
  <div>
    <p v-for="item in goods" :key="item.id">
      <nuxt-link :to="`list/${item.id}`">{{item.name}}</nuxt-link>
    </p>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    head() {
      return {
        title: 'nuxt-progress',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
      }
    },
    data() {
      return {
        goods: [
          { name: 'java', id: '1'},
          { name: 'python', id: '2'},
        ]
      }
    },
    // asyncData方法会在组件（限于页面组件）每次加载之前被调用
    // 第一个参数被设定为当前页面的上下文对象 包含出当前的vue实例，route, 配置的modules等一些列内容
    // 并且返回的值会和data合并
    async asyncData({ $axios }) {
      const { ok, goods } = await $axios.$get('/api/goods');

      if (ok) {
        return {
          goods
        }
      }

      // 错误处理
      error({ statusCode: 400, message: '查询失败，请重试' })
    }
  }
</script>

<style>
</style>
