// 参数1上下文和asyncData包含的一样
// 参数2一个注入函数 给上下文加入一个$xxx的属性
// 这个函数的目的是优雅的暴露接口给api使用

export default({ $axios }, inject) => {
    // 将来直接调用this.$login
    inject('login', user => {
        return $axios.$post('/api/login', user);
    });
}