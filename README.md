# hybrid-thorium
Hybrid Thorium is a collection of Vue components built on top of existing TELUS style.
## Documentation
https://telusdigital.github.io/hybrid-thorium/
## To contribute

```
git@github.com:telusdigital/hybrid-thorium.git
cd hybrid-thorium
npm install
npm run dev
open your browser http://localhost:9999 (hot reload enabled)
```

## To add new component
1. Create new component in ./src/components
2. Update ./src/main.js and ./src/standalone.js
3. Update ./example-dev/index.html
4. Add example page view for dev purpose in ./example-dev/src/view
5. Add new route to the page view in ./example-dev/src/routes.js

## To build stand alone js and css for vender usage
```
npm run prod
```
This will create hybridthorium.css and hybridthorium.js in ./dist folder

## To run unit test
```
npm run test
```
