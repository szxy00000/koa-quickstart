const isProduction = process.env.NODE_ENV === "production";

import Router from "koa-better-router";

// 其他工具用户的接口权限
const router = Router().loadMethods();


router.get("/demo", async (ctx, next) => {
    ctx.body = 'demo'
})

router.all("/upload", async (ctx, next) => {
    ctx.body = await new Promise((resolve) => {
        ctx.req.pipe(
        request({
            url: "xxx",
            headers: ctx.header,
            method: "post",
        }, (err, res) => {
            let resBody = JSON.parse(res.body);
            resolve({
                code: resBody.errno,
                message: resBody.errmsg,
                data: resBody.data
            });
        })
        );
  });
})

router.all("/download", async (ctx, next) => {
    ctx.body = request({
        url: "xxx",
        headers: ctx.header,
        method: "post",
        json: true,
        body: ctx.request.body,
    });
})

router.all("/form-upload", async (ctx, next) => {
    ctx.body = await new Promise((resolve) => {
        request.post(
            {
                url: "xxx",
                form: ctx.request.body,
            },
            function (e, res, body) {
                resolve(JSON.parse(body).data);
            }
        );
    });
})

export default router;
