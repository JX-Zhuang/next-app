const Koa = require('koa');
const Router = require('koa-router');
const staticServer = require('koa-static');
const next = require('next');
const port = 8421;
const app = next({
  dev: true,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  // serve 静态文件
  server.use(staticServer('static'));
  // 加载 next 路由
  const router = new Router();
  router.get('/api/test', async (ctx) => {
  });

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    Object.assign(ctx, {
      respond: false,
    });
  });

  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
