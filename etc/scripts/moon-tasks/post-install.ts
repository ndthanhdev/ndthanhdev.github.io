#!/usr/bin/env -S yarn dlx tsx
import "zx/globals";
$.verbose = true;
await $`node_modules/.bin/husky`.pipe(process.stdout);
await $`node_modules/.bin/syncpack fix`.pipe(process.stdout);
