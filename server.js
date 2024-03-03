import path from "path";
import Koa from "koa";
import serve from "koa-static";
import pc from "picocolors";
import { exec } from "child_process";
import render from "@utils/render";
import routes from "@routes/routes";

const app = new Koa();

const routesArr = ["/"].concat(routes.map((item) => item.path));

// static router
app.use(serve(path.join(__dirname, "./client/")));

// !!This is a test route, this framework should not be used to transfer data.
app.use(async (ctx, next) => {
  if (ctx.request.url === "/hello") {
    ctx.body = {
      hello: "Hello React IR!",
    };
    return;
  }
  await next();
});

// ui router
app.use(async (ctx, next) => {
  const method = ctx.method.toLocaleUpperCase();
  const url = ctx.request.url;
  if (method === "GET" && routesArr.includes(url)) {
    ctx.body = render(url);
    return;
  }
  await next();
});

// 404 route
app.use((ctx, next) => {
  ctx.status = 404;
});

app.listen(CONFIG.PORT, () => {
  console.log(
    pc.blue(
      `Server Run in: ${pc.underline(`http://127.0.0.1:${CONFIG.PORT}`)} .`
    )
  );
  if (CONFIG.ENV === "development") {
    exec(`http://127.0.0.1:${CONFIG.PORT}`);
  }
});
