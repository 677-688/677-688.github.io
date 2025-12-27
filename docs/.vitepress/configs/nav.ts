/* configs/nav.ts */
import type {DefaultTheme} from 'vitepress'

/**
 * 导航菜单项的配置,Nav 是显示在页面顶部的导航栏。它包含站点标题、全局菜单链接等。
 * text 是 nav 中显示的实际文本，
 * link 是单击文本时将导航到的链接,link 也可以是一个函数，它接受 PageData 作为参数并返回路径
 * items 数组，设置导航链接也可以是下拉菜单,link 和 items 只能配置一个
 * activeMatch 当前页面位于匹配路径下时，导航菜单项将突出显示
 * noIcon 如果不喜欢外部链接，有个箭头↗ 图标，可以选择关闭
 */
export const nav: DefaultTheme.Config['nav'] = [
    // {text: '首页', link: '/'},
    // {
    //     text: 'vitepress',
    //     activeMatch: "/vitepress/",
    //     items: [
    //         {text: 'vitepress使用', link: '/vitepress/vitepress使用'},
    //         {text: 'markdown语法扩展', link: '/vitepress/markdown语法扩展'},
    //         {text: 'frontmatter说明', link: '/vitepress/frontmatter说明'}
    //     ]
    // },
    // {
    //     text: 'markdown',
    //     activeMatch: "/markdown/",
    //     items: [
    //         {text: 'markdown语法', link: '/markdown/markdown语法'},
    //     ]
    // },
]


