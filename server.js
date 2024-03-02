import path from "path";
import Koa from "koa";
import serve from "koa-static";
import pc from "picocolors";
import { exec } from "child_process";
import render from "@utils/render";

const app = new Koa();

app.use(serve(path.join(__dirname, "./client/")));

app.use((ctx) => {
  console.log(ctx.request.url);
  if(["/favicon.ico"].includes(ctx.request.url)) {
    ctx.status = 404;
    return;
  }
  ctx.body = render(ctx.request.url);
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
