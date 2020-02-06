// 引入koa服务器
// 获取koa实例
const Koa = require('koa');
// 实例化koa
const app = new Koa();
// 引入koa路由等组件，使用路由代理接口中api字符
const bodyparser = require("koa-bodyparser");
const router = require("koa-router")({ prefix: "/api" });

// 设置cookie加密秘钥
app.keys = ["some secret", "another secret"];

// mock服务器端数据
const goods = [
    { name: 'java1', id: '1'},
    { name: 'python1', id: '2'},
]

// 获取数据接口
router.get('/goods', ctx => {
    ctx.body = {
        ok: 1,
        goods
    };
})

// 登录
// ctx是server实例，koa实例
router.post("/login", ctx => {
    const user = ctx.request.body;
    if (user.username === "jerry" && user.password === "123") {
      // 将token存入cookie
      const token = 'a mock token';
      ctx.cookies.set('token', token);
      ctx.body = { ok: 1, token };
    } else {
      ctx.body = { ok: 0 };
    }
  });

// 解析post数据并注册路由
app.use(bodyparser());

// 注册路由
app.use(router.routes());

// 启动服务器
app.listen(3030, () => console.log('api服务已启动'))