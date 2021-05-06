# single-spa 试用

## 运行步骤

1. git clone
2. npm install lerna@3.20.1 -g
3. lerna bootstrap
4. lerna run --scope @zhuzy-mf/root-config start
5. lerna run --scope @zhuzy-mf/navbar start
6. 访问 `http://localhost:8001/`，如需访问指定子应用，重复第 4 步将 root-config 替换为对应的包名

## routes

```
|_ /react-app
|_ /vue-app
|_ /people
|_ /planets
|_ /things
|_ /view-doggos
|_ /rate-doggos
```
