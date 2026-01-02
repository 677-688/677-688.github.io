---
date: 2025-12-27 20:54:00
title: 时间线 vitepress-markdown-timeline
permalink: /pages/7080f2
categories:
  - 插件
tags:
  - 插件
coverImg: /backgrounds/bizhihui_com_20231111134439169968147988241.jpg
---


# 时间线插件

## 安装
```shell
 npm install vitepress-markdown-timeline
```

### 注册插件
在 config.mts 中注册 markdown 解析插件
```typescript
import timeline from "vitepress-markdown-timeline";

export default {
    markdown: {
//行号显示
        lineNumbers: true,

        //时间线
        config: (md) => {
            md.use(timeline);
        },
    },
}
```

### 引入时间线样式
在 .vitepress/theme/index.ts 中引入时间线样式
```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

// 只需添加以下一行代码，引入时间线样式
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
extends: DefaultTheme,
}
```

### 使用

最后我们在markdown文件中，按格式使用即可

```markdown
::: timeline 2023-04-24

- 一个非常棒的开源项目 xxxx 1

:::

::: timeline 2023-04-23

- 一个非常棒的开源项目 xxxx 2

:::
```

::: timeline 2023-04-24

- 一个非常棒的开源项目 xxxx 1

:::

::: timeline 2023-04-23

- 一个非常棒的开源项目 xxxx 2

:::