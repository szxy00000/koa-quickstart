const isProduction = process.env.NODE_ENV === "production";

import Router from "koa-better-router";

// 其他工具用户的接口权限
const router = Router().loadMethods();


router.get("/demo", async (ctx, next) => {
    ctx.body = 'demo'
})

export default router;
