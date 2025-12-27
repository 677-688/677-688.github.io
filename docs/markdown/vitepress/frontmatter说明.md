---
lastUpdated: '2025/11/23'
categories:
    - Frontmatter说明
tags:
    - Frontmatter说明
---

# Frontmatter说明

## 定义

Frontmatter 是一种在文件顶部添加元数据的约定，它使用特定的格式（如 YAML、TOML、JSON）来存储关于文件本身的信息，与文件的主要内容分离开来。

## 核心概念

Frontmatter 通常位于文件的开头，被特定的`---`分隔符包裹：

### YAML Frontmatter（最常见）

```yaml
---
title: "我的文章标题"
date: 2024 - 01 - 15
author: 张三
tags:
    -技术
    - 教程
    - Markdown
draft: false
---
```

### JSON Frontmatter

```json lines
---
{
  "title": "Blogging Like a Hacker",
  "editLink": true
}
---
```

## 主要特点和用途

| 特点    | 说明                | 示例                        |
|-------|-------------------|---------------------------|
| 元数据存储 | 存储文章的标题、日期、作者、标签等 | title: "Hello World"      |
| 配置选项  | 控制页面布局、模板、发布状态等   | layout: post, draft: true |
| 变量传递  | 向模板或静态站点生成器传递数据   | description: "文章摘要"       |
| 与内容分离 | 元数据和主要内容完全独立      | Frontmatter 之后才是正式的文档内容   |

## 实际应用示例

### 在静态站点生成器中的应用

```yaml
---
title: "理解 Frontmatter"
date: 2024-01-15T10:30:00+08:00
layout: article
category: 技术文档
tags:
    - frontmatter
    - jekyll
    - hugo
    - 静态站点
description: "本文详细介绍了 Frontmatter 的概念和用法。"
thumbnail: "/images/thumbnail.jpg"
published: true
---
这里是文章的正式内容...
Markdown 格式的正文从这里开始。
```

### 支持 Frontmatter 的工具和场景

| 工具       | 场景                    | 用途               | 常用格式 | 
|----------|-----------------------|------------------|------|
| Jekyll   | GitHub Pages 的静态站点生成器 | YAML             |
| Hugo     | 快速的静态站点生成器            | YAML, TOML, JSON |
| Hexo     | 基于 Node.js 的博客框架      | YAML             |
| VuePress | Vue.js 技术文档工具         | YAML             |
| Obsidian | 知识管理软件                | YAML             |
| Astro    | 现代静态站点构建工具            | YAML             |

### 优势总结

- 结构化数据：为无结构的文本文件添加结构化元数据
- 工具集成：与各种静态站点生成器和工具无缝集成
- 内容管理：简化内容管理和分类
- 自动化：支持自动生成目录、标签云、相关文章等
- 灵活性：支持多种数据格式，易于读写

### 注意事项

- 确保 Frontmatter 位于文件的绝对开头
- 分隔符（如 ---）必须单独成行
- 缩进要一致（特别是在 YAML 中）
- 避免在 Frontmatter 中存储大量复杂数据

### VitePress 使用 frontmatter

#### 访问 frontmatter 数据

frontmatter 数据可以通过特殊的 $frontmatter 全局变量来访问：

```md
---
title: Docs with VitePress
editLink: true
---

# {{ $frontmatter.title }}

Guide content
```

还可以使用 `useData()` 辅助函数在 `<script setup>` 中访问当前页面的 `frontmatter`。

| 标签            | 类型                                                          | 说明                                                                                                                           |
|---------------|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| title         | `string`                                                    | 页面的标题。它与 `config.title` 相同，并且覆盖站点级配置。                                                                                        |
| titleTemplate | `string` <br> `boolean`                                     | 标题的后缀。它与 `config.titleTemplate` 相同，它会覆盖站点级别的配置。                                                                              |
| description   | `string`                                                    | 页面的描述。它与 `config.description` 相同，它会覆盖站点级别的配置。                                                                                |
| head          | `HeadConfig[]`                                              | 指定要为当前页面注入的额外 `head` 标签。将附加在站点级配置注入的头部标签之后。                                                                                  |
| layout        | `doc` 默认文档样式 <br> `home` “主页”的特殊布局  <br> `page` 不对内容应用任何样式  | 默认值：`doc`，指定页面的布局。                                                                                                           |
| hero          |                                                             | 当 `layout` 设置为 `home 时，定义主页 `hero` 部分的内容。更多详细信息：[默认主题：主页](https://vitepress.dev/zh/reference/default-theme-home-page)。       |
| features      |                                                             | 定义当 `layout` 设置为 `home 时要在 `features` 部分中显示的项目。更多详细信息：[默认主题：主页](https://vitepress.dev/zh/reference/default-theme-home-page)。 |
| navbar        | `boolean`                                                   | 默认值：`true`，是否显示导航栏。                                                                                                          |
| sidebar       | `boolean`                                                   | 默认值：`true`，是否显示侧边栏。                                                                                                          |
| aside         | `true` 渲染到右侧 <br> `false` 禁用侧边栏容器 <br> `'left'` 渲染到左侧       | 默认值：`true`，定义侧边栏组件在 `doc` 布局中的位置。                                                                                            |
| outline       | `number` <br> `[number, number]` <br> `'deep'` <br> `false` | 大纲中显示的标题级别。它与 `config.themeConfig.outline.level` 相同，它会覆盖站点级的配置。                                                              |
| lastUpdated   | `boolean` <br> `Date`                                       | 是否在当前页面的页脚中显示最后更新时间的文本。如果指定了日期时间，则会显示该日期时间而不是上次 git 修改的时间戳。                                                                  |
| editLink      | `boolean`                                                   | 默认值：true，是否在当前页的页脚显示编辑链接。                                                                                                    |
| footer        | `boolean`                                                   | 默认值：true，是否显示页脚。                                                                                                             |
| pageClass     | `string`                                                    | 将额外的类名称添加到特定页面，然后可以在 .vitepress/theme/custom.css 文件中自定义该特定页面的样式                                                              |

















