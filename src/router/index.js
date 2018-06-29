import Router from 'koa-better-router';
import fs from 'fs';

const router = Router().loadMethods();

fs.readdirSync(__dirname)
  .filter(value => {
    return /\.js$/.test(value) && value !== 'index.js';
  })
  .map(value => router.addRoutes(...require('./' + value).default.getRoutes()));

export default router;