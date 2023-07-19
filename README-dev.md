# 项目开发指南

本项目在 [turn.js](https://github.com/blasten/turn.js) 的基础上做了改动

## 代码说明

- 组件的源码在 `components/flip` 中

- 预览的代码在 `src` 中

## 项目跑起来

```shell
# 安装依赖
pnpm install
```

1. 需要编译 components/flip/index.vue

```
pnpm build -w
```

2.启动服务

```
pnpm dev
```

## 发布到 npm

```shell
pnpm release
```
