import {defineConfig} from 'vitepress'
import Sidebar from "vitepress-plugin-sidebar-resolve";
import timeline from "vitepress-markdown-timeline";
import {MermaidMarkdown, MermaidPlugin} from 'vitepress-plugin-mermaid';

import {nav} from './configs'

// https://vitepress.dev/reference/site-config
// VitePress's options here...
const vitePressOptions = {
    /**
     *  以下为站点元数据
     */
    // 站点的标题，默认值： VitePress，每个页面可以通过 frontmatter 覆盖
    title: " 677 的知识库",
    // 站点的标题模板，允许自定义每个页面的标题后缀或整个标题,设置为 false 以禁用标题后缀,设置其他字符串则替换标题后缀，每个页面可以通过 frontmatter 覆盖
    titleTemplate: false,
    // 站点的描述，这将呈现为页面 HTML 中的 <meta> 标签,每个页面可以通过 frontmatter 覆盖
    description: " 677 的知识库",
    // 设置要在页面 HTML 的 <head> 标签中呈现的其他元素,用户添加的标签在结束 head 标签之前呈现，在 VitePress 标签之后。
    // 当前添加了 ico 显示
    head: [['link', {rel: 'icon', href: 'icon/cat1.ico'}]],
    // 站点的 lang 属性。这将呈现为页面 HTML 中的 <html lang="en-US"> 标签。
    lang: 'en-US',
    // 默认值： /,计划在子路径部署就需要改这个为子路径目录,始终以 / 开头和结尾
    // base: "/",
    base: "/677blog/",
    /**
     * 路由
     */
    // 是否生成简洁的URL 当设置为 true 时，VitePress 将从 URL 中删除 .html 后缀。
    cleanUrls: true,
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
    ignoreDeadLinks: true,
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

    /**
     * 默认主题配置 https://vitepress.dev/reference/default-theme-config
     */
    themeConfig: {
        /**
         * 导航栏上显示的 Logo，位于站点标题前。
         * 可以接受一个路径字符串，或者一个对象来设置在浅色/深色模式下不同的 Logo。
         */
        logo: {light: "icon/cat1.ico", dark: "icon/cat2.ico"},
        /**
         * 可以自定义此项以替换导航中的默认站点标题 (应用配置中的 title)。
         * 当设置为 false 时，导航中的标题将被禁用。这在当 logo 已经包含站点标题文本时很有用。
         */
        siteTitle: false,

        // 配置迁移到 docs/.vitepress/theme/configs/nav.ts
        nav,

        /**
         * 侧边栏菜单项的配置：侧边栏是文档的主要导航块。
         * text：侧边栏项的文本标签
         * link：侧边栏项的链接，应指定以 / 开头的实际文件的路径，如果在链接末尾添加斜杠，它将显示相应目录的 index.md。
         * collapsed:   如果未指定，侧边栏组不可折叠
         *              如果为 `true`，则侧边栏组可折叠并且默认折叠
         *              如果为 `false`，则侧边栏组可折叠但默认展开
         *
         * items：侧边栏项的子项，深度超过 6 级将被忽略，并且不会在侧边栏上显示。
         *
         * 单侧边栏：如果展示所有的侧边栏。则传数组。
         * 多侧边栏：根据页面路径显示不同的侧边栏，传递一个对象，key是对应的页面目录,当用户位于对应的页面目录时，才显示此侧边栏
         */
        // sidebar: {"/": set_sidebar("docs/")},
        // sidebar: {
        //     '/vitepress/': [
        //         {
        //             text: 'vitepress',
        //             link: '/vitepress/vitepress使用',
        //             collapsed: false,
        //             /**
        //              * 侧边栏项的子项
        //              */
        //             items: [
        //                 {text: 'vitepress使用', link: '/vitepress/vitepress使用'},
        //                 {text: 'markdown语法扩展', link: '/vitepress/markdown语法扩展'},
        //                 {text: 'frontmatter说明', link: '/vitepress/frontmatter说明'},
        //             ]
        //         }
        //     ],
        //     '/markdown/': [
        //         {
        //             text: 'markdown',
        //             items: [
        //                 {text: 'markdown语法', link: '/markdown/markdown语法'},
        //             ]
        //         },
        //     ]
        // },


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
        // socialLinks: [
        // {icon: 'github', link: '/'}
        // ],

        /**
         * 页脚配置:可以添加 message 和 copyright。由于设计原因，仅当页面不包含侧边栏时才会显示页脚。
         * 类型：Footer
         * 可以通过 frontmatter 进行覆盖。
         */
        footer: {
            // 版权前显示的信息
            message: `
                <div style="display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px;">
<!--                  <span>基于 VitePress 构建</span>-->
<!--                  <span>•</span>-->
<!--                  <a href="/sitemap.xml" style="display: inline-flex; align-items: center;">网站地图</a>-->
<!--                  <span>•</span>-->
<!--                  <a href="/feed.xml" style="display: inline-flex; align-items: center;">RSS 订阅</a>-->
<!--                  <span>•</span>-->
<!--                  <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener">京ICP备12345678号</a>-->

                        <span class="text">
                        总访问量 <span id="busuanzi_value_site_pv" class="font-bold">--</span> 次
                        </span>
                        <img src="heart.gif" alt="heart" width="10" height="10" />
                        <span class="text">
                        访客数 <span id="busuanzi_value_site_uv" class="font-bold">--</span> 人次
                        </span>
                  <DataPanel />
                </div>
              `,
            // 实际的版权文本
            copyright: `Copyright © 2025 677. All Rights Reserved.`
        },

        /**
         * 编辑链接可让显示链接以编辑 Git 管理服务 (例如 GitHub 或 GitLab) 上的页面。 TODO 部署后 需要修改
         * 类型：EditLink
         * 每个页面可以通过 frontmatter 覆盖
         */
        editLink: {
            pattern: '',
            text: '编辑此页面'
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
        // darkModeSwitchLabel: ""

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

        /**
         * 是否在 markdown 中的外部链接旁显示外部链接图标。
         * 类型：boolean
         * 默认值：false
         */
        externalLinkIcon: true
    }
}

// VitePress 配置
export default defineConfig({
    extends: vitePressOptions,

    markdown: {
        //行号显示
        lineNumbers: true,

        config: (md) => {
            //时间线
            md.use(timeline);
            //Mermaid
            md.use(MermaidMarkdown);
            //标题下增加修改时间、字数、阅读时间
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options);
                if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
                return htmlResult;
            }
            // 代码组中添加图片
            md.use((md) => {
                const defaultRender = md.render
                md.render = (...args) => {
                    const [content, env] = args
                    const currentLang = env?.localeIndex || 'root'
                    const isHomePage = env?.path === '/' || env?.relativePath === 'index.md'  // 判断是否是首页

                    if (isHomePage) {
                        return defaultRender.apply(md, args) // 如果是首页，直接渲染内容
                    }
                    // 调用原始渲染
                    let defaultContent = defaultRender.apply(md, args)
                    // 替换内容
                    if (currentLang === 'root') {
                        defaultContent = defaultContent.replace(/提醒/g, '提醒')
                            .replace(/建议/g, '建议')
                            .replace(/重要/g, '重要')
                            .replace(/警告/g, '警告')
                            .replace(/注意/g, '注意')
                    } else if (currentLang === 'ko') {
                        // 韩文替换
                        defaultContent = defaultContent.replace(/提醒/g, '알림')
                            .replace(/建议/g, '팁')
                            .replace(/重要/g, '중요')
                            .replace(/警告/g, '경고')
                            .replace(/注意/g, '주의')
                    }
                    // 返回渲染的内容
                    return defaultContent
                }

                // 获取原始的 fence 渲染规则
                const defaultFence = md.renderer.rules.fence?.bind(md.renderer.rules) ?? ((...args) => args[0][args[1]].content);

                // 重写 fence 渲染规则
                md.renderer.rules.fence = (tokens, idx, options, env, self) => {
                    const token = tokens[idx];
                    const info = token.info.trim();

                    // 判断是否为 md:img 类型的代码块
                    if (info.includes('md:img')) {
                        // 只渲染图片，不再渲染为代码块
                        return `<div class="rendered-md">${md.render(token.content)}</div>`;
                    }

                    // 其他代码块按默认规则渲染（如 java, js 等）
                    return defaultFence(tokens, idx, options, env, self);
                };
            })
        },
    },

    vite: {
        plugins: [
            //侧边栏生成配置
            Sidebar({
                path: "/",
                scannerRootMd: true,
                //侧边栏生成规则
                // 当 resolveRule 为 filePath，则按照本地文件路径生成侧边栏
                // 当 resolveRule 为 rewrites，则按照 rewrites 结果生成侧边栏
                resolveRule: "filePath",
                // resolveRule: "rewrites",

                //排序设置
                sort: true, // 开启 frontmatter.sidebarSort 功能，默认已经开启，无需设置
                defaultSortNum: 9999, // 没有指定 frontmatter.sidebarSort 时的默认值，用于侧边栏排序
                sortNumFromFileName: false, // 是否用文件名的前缀序号作为其侧边栏 Item 的排序序号。如果为 true，当文件名存在序号前缀，则使用序号前缀，否则使用 defaultSortNum

                //是否折叠侧边栏
                collapsed: false,
            }),
            MermaidPlugin()
        ],
        optimizeDeps: {
            include: ['mermaid'],
        },
        ssr: {
            noExternal: ['mermaid'],
        },
    },
});
