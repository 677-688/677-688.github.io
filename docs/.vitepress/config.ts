import {defineConfig} from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import {teekConfig} from "./teekConfig";
import {nav} from './configs'

const description = [
    "欢迎来到  677 的知识库"
].toString();


// https://vitepress.dev/reference/site-config
export default defineConfig({
    extends: teekConfig,
    /**
     *  以下为站点元数据
     */
    // 站点的标题，默认值： VitePress，每个页面可以通过 frontmatter 覆盖
    title: " 677 的知识库",
    // 站点的描述，这将呈现为页面 HTML 中的 <meta> 标签,每个页面可以通过 frontmatter 覆盖
    description: description,
    // 设置要在页面 HTML 的 <head> 标签中呈现的其他元素,用户添加的标签在结束 head 标签之前呈现，在 VitePress 标签之后。
    // 当前添加了 ico 显示
    head: [
        [
            "link",
            {rel: "icon", type: "image/svg+xml", href: 'icons/cat1.ico'},
        ],
        ["meta", {property: "og:type", content: "website"}],
        ["meta", {property: "og:locale", content: "zh-CN"}],
        ["meta", {property: "og:title", content: "677 | 知识库"}],
        ["meta", {property: "og:site_name", content: "677"}],
        ["meta", {property: "og:image", content: ""}],
        ["meta", {property: "og:url", content: ""}],
        ["meta", {property: "og:description", description}],
        ["meta", {name: "description", description}],
        ["meta", {name: "author", content: "677"}],
        // 禁止浏览器缩放
        // [
        //   "meta",
        //   {
        //     name: "viewport",
        //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
        //   },
        // ],
        ["meta", {name: "keywords", description}],
    ],
    // 站点的 lang 属性。这将呈现为页面 HTML 中的 <html lang="en-US"> 标签。
    lang: "zh-CN",
    // 默认值： /,计划在子路径部署就需要改这个为子路径目录,始终以 / 开头和结尾
    base: "/",
    // base: "/677blog/",
    /**
     * 路由
     */
    // 是否生成简洁的URL 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。
    cleanUrls: false,
    // 重定向 类型：Record<string, string> ，自定义目录 <-> URL 映射，详细信息请参阅[路由：路由重写](https://vitepress.dev/zh/guide/routing#route-rewrites)。
    rewrites: {
        // '677blog/**:page': '**/:page'
        // '^/677blog/(.*)$': '/$1'
    },
    /**
     * 构建
     */
    //设置相对于项目根目录的 markdown 文件所在的文件夹,详细信息请参阅[根目录和源目录](https://vitepress.dev/zh/guide/routing#root-and-source-directory)
    // srcDir:"",
    //用于匹配应排除作为源内容输出的 markdown 文件，语法详见 glob pattern(https://github.com/mrmlnc/fast-glob#pattern-syntax)。
    // srcExclude:"",
    // 项目的构建输出位置，相对于项目根目录，默认值：./.vitepress/dist
    // outDir:"",
    // 指定放置生成的静态资源的目录。该路径应位于 outDir 内，并相对于它进行解析,默认值：assets
    // assetsDir:"",
    // 缓存文件的目录，相对于项目根目录，默认值：./.vitepress/cache
    // cacheDir:"",
    // 默认为 false 时，VitePress 会因为死链而导致构建失败。
    // 当设置为 true 时，VitePress 不会因为死链而导致构建失败。
    // 当设置为 'localhostLinks' ，出现死链时构建将失败，但不会检查 localhost 链接。
    // 也可以是一组精确的 url 字符串、正则表达式模式或自定义过滤函数。
    // ignoreDeadLinks: false,
    // 默认false,当设置为 true 时，将页面元数据提取到单独的 JavaScript 块中，而不是内联在初始 HTML 中。这使每个页面的 HTML 负载更小，并使页面元数据可缓存，从而当站点中有很多页面时可以减少服务器带宽。
    metaChunk: true,
    // 默认false,设置为 true 时，生产应用程序将在 MPA 模式下构建。MPA 模式默认提供 零 JavaScript 支持，代价是禁用客户端导航，并且需要明确选择加入才能进行交互。
    // mpa: true,
    /**
     * 主题
     */
    // 默认false，是否使用 Git 获取每个页面的最后更新时间戳。时间戳将包含在每个页面的页面数据中，可通过 useData 访问。
    // 使用默认主题时，启用此选项将显示每个页面的最后更新时间。可以通过 themeConfig.lastUpdatedText 选项自定义文本。
    lastUpdated: true,

    //markdown 配置
    markdown: {
        // 开启行号
        lineNumbers: true,
        image: {
            // 默认禁用；设置为 true 可为所有图片启用懒加载。
            lazyLoading: true,
        },
        // 更改容器默认值标题
        container: {
            tipLabel: "提示",
            warningLabel: "警告",
            dangerLabel: "危险",
            infoLabel: "信息",
            detailsLabel: "详细信息",
        },
    },
    //站点地图配置
    sitemap: {
        hostname: "https://677-688.github.io",
        transformItems: (items) => {
            const permalinkItemBak: typeof items = [];
            // 使用永久链接生成 sitemap
            const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
                .permalinks;
            items.forEach((item) => {
                const permalink = permalinks?.map[item.url];
                if (permalink)
                    permalinkItemBak.push({url: permalink, lastmod: item.lastmod});
            });
            return [...items, ...permalinkItemBak];
        },
    },

    /**
     * 默认主题配置 https://vitepress.dev/reference/default-theme-config
     */
    themeConfig: {
        /**
         * 导航栏上显示的 Logo，位于站点标题前。
         * 可以接受一个路径字符串，或者一个对象来设置在浅色/深色模式下不同的 Logo。
         */
        logo: {light: "/icons/cat1.ico", dark: "/icons/cat2.ico"},
        /**
         * 可以自定义此项以替换导航中的默认站点标题 (应用配置中的 title)。
         * 当设置为 false 时，导航中的标题将被禁用。这在当 logo 已经包含站点标题文本时很有用。
         */
        siteTitle: false,

        // 配置迁移到 docs/.vitepress/theme/configs/nav.ts
        nav,

        /**
         *  详情页面导航
         *  默认true 在页面右侧渲染，false 可禁用 aside 容器，left在页面左侧渲染
         *  每个页面可以通过 frontmatter 覆盖
         */
        // aside: true,
        /**
         * 设置页面大纲
         * 类型：Outline | Outline['level'] | false
         *  outline 中的字段：
         *      level ? : outline 中要显示的标题级别。
         *          number  单个数字表示只显示该级别的标题。
         *          [number, number]  如果传递的是一个元组，第一个数字是最小级别，第二个数字是最大级别。
         *          'deep' 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
         *      label:显示在 outline 上的标题。默认： 'On this page'
         *  每个页面可以通过 frontmatter 覆盖层级
         */
        outline: {label: "页面导航", level: 'deep'},
        /**
         * 导航栏旁其他链接配置
         * 类型：SocialLink[]
         */
        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/677-688",
            },
        ],

        /**
         * 页脚配置:可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
         * 类型：Footer
         * 可以通过 frontmatter 进行覆盖。
         */
        // teekConfig.footerInfo  主题配置中设置
        // footer: {
        //     // 版权前显示的信息
        //     message: ``,
        //     // 实际的版权文本
        //     copyright: `Copyright © 2025 677. All Rights Reserved.`
        // },
        /**
         * 编辑链接可让显示链接以编辑 Git 管理服务 (例如 GitHub 或 GitLab) 上的页面。
         * 类型：EditLink
         * 每个页面可以通过 frontmatter 覆盖
         */
        editLink: {
            text: "在 GitHub 上编辑此页",
            pattern:
                "https://github.com/677-688/677-688.github.io/blob/main/docs/:path",
        },

        /**
         * 允许自定义上次更新的文本和日期格式。
         * 类型：LastUpdatedOptions
         */
        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short', //full
                timeStyle: 'short' //medium
            }
        },

        /**
         * 支持使用 Algolia DocSearch 搜索站点文档
         * 类型：AlgoliaSearch
         */
        // algolia: ""

        /**
         * 本地搜索
         * 得益于 minisearch，VitePress 支持使用浏览器内索引进行模糊全文搜索
         */
        search: {
            provider: "local",
            options: {
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "无法找到相关结果",
                        resetButtonTitle: "清除查询条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                        },
                    },
                },
            },
        },

        /**
         *  可用于自定义出现在上一页和下一页链接上方的文本
         *  类型：DocFooter
         *  export interface DocFooter {
         *   prev?: string | false
         *   next?: string | false
         * }
         *
         */
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },

        /**
         * 用于自定义深色模式开关标签，该标签仅在移动端视图中显示。
         * 类型：string
         * 默认值：Appearance
         */
        darkModeSwitchLabel: "主题",

        /**
         * 用于自定义悬停时显示的浅色模式开关标题。
         * 类型：string
         * 默认值：Switch to light theme
         */
        lightModeSwitchTitle: "切换到浅色模式",

        /**
         * 用于自定义悬停时显示的深色模式开关标题。
         * 类型：string
         * 默认值：Switch to dark theme
         */
        darkModeSwitchTitle: "切换到深色模式",

        /**
         * 用于自定义侧边栏菜单标签，该标签仅在移动端视图中显示。
         * 类型：string
         * 默认值：Menu
         */
        sidebarMenuLabel: "菜单",

        returnToTopLabel: "返回顶部",

        /**
         * 是否在 markdown 中的外部链接旁显示外部链接图标。
         * 类型：boolean
         * 默认值：false
         */
        externalLinkIcon: true
    },

    //
    vite: {
        plugins: [llmstxt() as any],
    },
    // transformHtml: (code, id, context) => {
    //   if (context.page !== "404.md") return code;
    //   return code.replace("404 | ", "");
    // },
});


