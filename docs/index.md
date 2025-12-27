---
# https://vitepress.dev/reference/default-theme-home-page
# VitePress 默认主题提供了一个首页布局，可以通过 frontmatter 指定 layout: home 在任何页面上使用
layout: home
# Hero 部分位于主页顶部
hero:
    # `text` 上方的字符，带有品牌颜色
    # 预计简短，例如产品名称
    name: 677 的知识库

    # hero 部分的主要文字，
    # 被定义为 `h1` 标签
    text: 学习 · 实践 · 沉淀

    # `text` 下方的标语
    tagline: 持续学习是成长的关键，不断记录和反思来提升自己

    # text 和 tagline 区域旁的图片
    # type ThemeableImage =
    #| string
    #| { src: string alt?: string }
    #| { light: string dark: string alt?: string }
    image: {
        light: icon/cat1.ico,
        dark: icon/cat2.ico
    }

    # 主页 hero 部分的操作按钮
    # theme:按钮的颜色主题，默认为 `brand`  'brand' | 'alt'
    # text:按钮的标签
    # link：按钮的目标链接
    # target：链接的 target 属性
    # rel：链接的 rel 属性
    actions:
        -   theme: brand
            text: 软件设计理论
            link: /markdown/软件设计理论/
        -   theme: alt
            text: 目录
            link: /markdown/

# 在 Features 部分，可以在 Hero 部分之后列出任意数量的 Feature
# icon：在每个 feature 框中显示图标
#          type FeatureIcon =
#             | string
#             | { src: string; alt?: string; width?: string; height: string }
#             | {
#             light: string
#             dark: string
#             alt?: string
#             width?: string
#             height: string
#          }
# title：feature 的标题
# details：feature 的详情
# link：点击 feature 组件时的链接，可以是内部链接，也可以是外部链接。
# linkText：feature 组件内显示的链接文本，最好与 `link` 选项一起使用
# rel：`link` 选项的链接 rel 属性
# target：`link` 选项的链接 target 属性
features:
    -   title: 学习
        details: 持续学习是成长的关键，通过不断记录和反思来提升自己
        icon: {
            light: icon/cat1.ico,
            dark: icon/cat2.ico
        }
    -   title: 实践
        details: 通过动手实践来巩固理论知识，实战经验是最宝贵的财富
        icon: {
            light: icon/cat1.ico,
            dark: icon/cat2.ico
        }
    -   title: 创新
        details: 在学习和实践中不断创新，探索新的技术和方法
        icon: {
            light: icon/cat1.ico,
            dark: icon/cat2.ico
        }
    -   title: 记录
        details: 详细记录学习过程中的每一个步骤和心得，方便日后查阅和反思
        icon: {
            light: icon/cat1.ico,
            dark: icon/cat2.ico
        }
---
<!-- 标题下划线 -->
<HomeUnderline />

<!-- 浏览量 <DataPanel /> -->


