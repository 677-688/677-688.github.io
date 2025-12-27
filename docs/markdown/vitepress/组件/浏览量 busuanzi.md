# 图片缩放 插件

## 安装

```shell
 npm install busuanzi.pure.js
``` 

### 引入样式

在 .vitepress/theme/index.ts 中引入样式

```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import {inBrowser} from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

export default {
    extends: DefaultTheme,

    enhanceApp({app, router}) {
        if (inBrowser) {
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
            }
        }
    },

}
```

### 使用

本站总访问量 <span id="busuanzi_value_site_pv" /> 次 <br>
本站访客数 <span id="busuanzi_value_site_uv" /> 人次

### 修改样式

在 theme/components 文件夹中创建 DataPanel.vue 组件

```vue

<script setup lang="ts">
</script>

<template>
  <div class="panel">
    <div class="container">
      <section class="grid">
        <span class="text">
          本站总访问量 <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
        </span>
        <img src="/heart.gif" alt="heart" width="50" height="50"/>
        <span class="text">
          本站访客数 <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
        </span>
      </section>
    </div>
  </div>
</template>

<style scoped>
  .panel {
    margin-top: 12px;
    margin-bottom: 8px;
  }

  .container {
    background-color: var(--vp-c-bg-soft);
    border-radius: 8px;
    width: 100%;
    min-height: 32px;
    max-width: 1152px;
    margin-left: auto;
    margin-right: auto;
  }

  .grid {
    font-weight: 500;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    padding-right: 12px;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    display: grid;
  }

  .text {
    font-size: .875rem;
    line-height: 1.25rem;
  }
</style>
```

然后，在 index.ts 中注册全局组件

```typescript
/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import DataPanel from "./components/DataPanel.vue"

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        // 注册全局组件
        app.component('DataPanel', DataPanel)
    }
}
```

最后回到首页，插入组件看效果

```vue
<!-- index.md -->
<DataPanel/>
```

<DataPanel/>