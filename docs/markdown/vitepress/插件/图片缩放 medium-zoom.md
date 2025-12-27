# 图片缩放 插件

## 安装

```shell
 npm install medium-zoom
``` 

### 引入样式

在 .vitepress/theme/index.ts 中引入样式

```typescript
// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'

import mediumZoom from 'medium-zoom';
import {onMounted, watch, nextTick} from 'vue';
import {useRoute} from 'vitepress';

export default {
    extends: DefaultTheme,

    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', {background: 'var(--vp-c-bg)'}); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },

}
```

### 点击图片后，还是能看到导航栏，加一个遮挡样式

在 .vitepress/theme/style/style.css 中加入如下代码，并保存

```css
/* .vitepress/theme/style/style.css */

.medium-zoom-overlay {
    z-index: 30;
}

.medium-zoom-image {
    z-index: 9999 !important; /* 给的值是21，但是实测盖不住，直接999 */
}
```

### 使用

最后我们在markdown文件中，按格式使用即可

<img src="/public/小兰和柯南%20黑色背景%204K电脑壁纸3840x2400.jpg" alt=""> 