import path from "path";
import Koa from "koa";
import serve from "koa-static";
import render from "./render";

const app = new Koa();
app.use(serve(path.join(__dirname, "./client/")));

app.use((ctx) => {
  console.log(ctx.request.url);
  ctx.body = render(ctx.request.url);
});

app.listen(3000, () => {
  console.log("SSR Server Start...");
});
