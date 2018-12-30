## start

Starts the application for development.

Run task `clean:ports` before this.

```bash
babel-node node_modules/.bin/webpack-serve --config ./webpack/webpack.dev.js
```

## clean:deps

Removes `node_modules` directory.

```bash
rm -rf node_modules
```

## clean:app

Removes files created by building the app.

```bash
find ./public -type f -name "bundle-*" -delete & rm -rf ./public/index.html
```

## clean:ports

Frees up all ports used by this project.

```bash
kill-port 1776 3000 5000
```
