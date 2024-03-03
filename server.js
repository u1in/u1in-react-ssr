import path from "path";
import Koa from "koa";
import serve from "koa-static";
import pc from "picocolors";
import { exec } from "child_process";
import render from "@utils/render";
import routes from "@routes/routes";

const app = new Koa();
const routesArr = routes.map((item) => item.path);

app.use(serve(path.join(__dirname, "./client/")));

// !!This is a test route, this framework should not be used to transfer data.
app.use(async (ctx, next) => {
  if (ctx.request.url === "/test") {
    ctx.body = {
      hello: "Hello React SSR!",
    };
    return;
  }
  await next();
});

app.use(async (ctx) => {
  if (routesArr.includes(ctx.request.url)) {
    ctx.body = await render(ctx.request.url);
    return;
  }
  ctx.status = 404;
  ctx.body = "";
});

app.listen(CONFIG.PORT, () => {
  if (CONFIG.ENV === "development") {
    console.log(
      pc.blue(
        `React Server Run in: ${pc.underline(
          `http://127.0.0.1:${CONFIG.PORT}`
        )} .`
      )
    );
    exec(`http://127.0.0.1:${CONFIG.PORT}`);
  }
});
