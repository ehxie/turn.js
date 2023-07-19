# turn-vue

该仓库是在 [turn.js](https://github.com/blasten/turn.js) 的基础上做了改动

1. 翻页可以支持整个侧边，而不仅仅只能从四个角进行翻页
2. 支持 vue2

[更详细的使用](/readme-old.md)

# Usage

1.安装

```shell
npm install turnjs-vue
```

2.局部导入

```vue
<template>
    <Flip>
        <div class="flip-item-demo">1</div>
        <div class="flip-item-demo">2</div>
        <div class="flip-item-demo">3</div>
    </Flip>
<template>
<script>
import Flip from "turnjs-vue";

export default {
    components: {
        Flip
    }
}
</script>
<style>
.flip-item-demo {
    width: 400px;
    height: 400px;
    background-color: red;
}
</style>
```

## Props
options: 参考 [turn.js 的 Options](http://www.turnjs.com/#api)
disable: Boolean, 是否禁用滑动（可以自己调用 nextPage 进行翻页）
wrapperClass: 自定义 wrapper 的 class
## API
```shell
# example
import {nextPage} from 'turnjs-vue'
````

```ts
// 功能：下一页
// 当最后一页调用该函数时返回 false
interface nextPage {
    (): boolean 
}

// 功能：上一页
// 当第一页调用该函数时返回 false
interface previousPage {
    (): boolean 
}

// interface toPage {
    (index: number): void
}
```