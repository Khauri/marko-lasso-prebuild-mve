## Lasso Prebuild Issue

An MVE showing an issue with lasso prebuilds failing because of minified html.

### How To Reproduce
1. use `npm run dev` to run without using the prebuild setting. Observe that the application works fine.
2. Prebuild the app with `npm run build`. 
3. Run the app again using `USE_PREBUILD=true npm run dev`. Observe that the application now throws an error.