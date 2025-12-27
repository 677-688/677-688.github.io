# markdown 语法扩展

## 锚点

| 元素    | 说明                                       | 语法                     | 注意点或最佳实践 |
|:------|:-----------------------------------------|:-----------------------|:---------|
| 标题锚点  | 标题会自动应用锚点。可以使用 markdown.anchor 选项配置锚点的渲染 |                        |          |
| 自定义锚点 | 指定自定义锚点而不是使用自动生成的锚点                      | # 使用自定义锚点 {#my-anchor} |          |

## 链接

| 元素   | 说明                                                                      | 语法                                                                                                                                                                      | 注意点或最佳实践 |
|:-----|:------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------|
| 内部链接 | 内部链接将转换为单页导航的路由链接。此外，子目录中包含的每个 index.md 都会自动转换为 index.html，并带有相应的 URL / | `[Home](/)` 导航至根目录 <br> `[xx](/xx/)` 导航至xx目录下index.html <br> `[xx heading](./#heading)` 锚定到目录 xx 下的index文件中的一个heading标题上 <br> `[xx - three](../xx/three)` 导航至xx目录下three |          |
| 外部链接 | 外部链接带有 target="_blank" rel="noreferrer"：                                |                                                                                                                                                                         |          |

## 目录

| 元素        | 说明                                                        | 语法 | 注意点或最佳实践 |
|:----------|:----------------------------------------------------------|:---|:---------|
| 目录表 (TOC) | `[[toc]]`               可以使用 markdown.toc 选项配置 TOC 的呈现效果。 |    |          |

## 自定义容器

| 元素           | 说明                                                                                                                      | 语法 | 注意点或最佳实践 |
|:-------------|:------------------------------------------------------------------------------------------------------------------------|:---|:---------|
| 自定义标题        | `::: info  xxx  `<br>`::: tip xxx `<br>`::: warning xxx `<br>`::: danger xxx `<br>`::: details xxx `<br>`... `<br>`:::` |    |          |
| GitHub 风格的警报 | `> [!NOTE]`<br>`> [!TIP]`<br>`> [!IMPORTANT]`<br>`> [!WARNING]`<br>`> [!CAUTION]`<br> `>`                               |    |          |
| raw          | 用来防止与 VitePress 的样式和路由冲突                                                                                                |    |          |

## 代码块

| 元素     | 说明                                                             | 语法                                        | 注意点或最佳实践 |
|:-------|:---------------------------------------------------------------|:------------------------------------------|:---------|
| 代码块带标题 |                                                                | `c [HelloWorld.c]`                        |          |
| 行号     | 可以在站点配置为每个代码块启用行号<br>也可以在代码块中添加标记来覆盖在配置中的设置                    | `:line-numbers` 或 `:no-line-numbers`      |          |
| 指定起始行号 | 行号从 `5` 开始                                                     | `js:line-numbers=5`                       |          |
| 单行高亮   | 设置单行高亮                                                         | `// [!code highlight]`                    |          |
| 多行高亮   | 高亮第`2、4、5`行。单行如 `{2}`，多行如 `{2-5}`，混合如 `{2,4-5}`                | `js{2,4-5}`                               |          |
| 代码聚焦   | 在代码行后添加注释以聚焦该行                                                 | `// [!code focus]`                        |          |
| 多行聚焦   | 聚焦从该行开始的连续3行                                                   | `// [!code focus:3]`                      |          |
| 增删标记   | 模拟 Git diff，标记新增或删除的代码行                                        | `// [!code --]` 或 `// [!code ++]`         |          |
| 错误/警告  | 在代码行后添加注释以标记错误或警告                                              | `// [!code warning]` 或 `// [!code error]` |          |
| 导入代码片段 | @ 的值对应于源代码根目录，默认情况下是 VitePress 项目根目录，除非配置了 srcDir。或者也可以从相对路径导入 | `<<< @/filepath`                          |          |
| 代码组    |                                                                | `::: code-group  ```js [组名]```  :::`      |          |

## 包含 markdown 文件

| 元素       | 说明                                            | 语法 | 注意点或最佳实践 |
|:---------|:----------------------------------------------|:---|:---------|
| 引入其他文件内容 | `<!--@include: ./parts/basics.md{开始行,结束行}-->` |    | 行数可以为空   | 

## 图片懒加载

| 元素    | 说明                                                              | 语法 | 注意点或最佳实践 |
|:------|:----------------------------------------------------------------|:---|:---------|
| 图片懒加载 | 通过在配置文件中将 lazyLoading 设置为 true，可以为通过 markdown 添加的每张图片启用懒加载。默认禁用 |    |          | 

## 徽标

徽标可让你为标题添加状态。例如，指定部分的类型或支持的版本可能很有用。

### info <Badge type="info" text="info" />

### tip <Badge type="tip" text="tip" />

### warning <Badge type="warning" text="warning" />

### danger <Badge type="danger" text="danger" />

### custom element <Badge type="info">custom element</Badge>

## 其他高级配置

VitePress 使用 markdown-it 作为 Markdown 渲染器。上面提到的很多扩展功能都是通过自定义插件实现的。可以使用 .vitepress/config.js 中的 markdown 选项来进一步自定义 markdown-it 实例。

```javascript
import {defineConfig} from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
    markdown: {
        // markdown-it-anchor 的选项
        // https://github.com/valeriangalliat/markdown-it-anchor#usage
        anchor: {
            permalink: markdownItAnchor.permalink.headerLink()
        },
        // @mdit-vue/plugin-toc 的选项
        // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
        toc: {level: [1, 2]},
        config: (md) => {
            // 使用更多的 Markdown-it 插件！
            md.use(markdownItFoo)
        }
    }
})
```

 

