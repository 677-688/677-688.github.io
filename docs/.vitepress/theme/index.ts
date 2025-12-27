// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import {useRoute} from 'vitepress';
import {inBrowser} from 'vitepress'
import {onMounted, watch, nextTick} from 'vue';
//
import busuanzi from 'busuanzi.pure.js'
import DataPanel from "./components/DataPanel.vue"
import ArticleMetadata from './components/ArticleMetadata.vue';
import Xgplayer from './components/Xgplayer.vue';
import HomeUnderline from './components/HomeUnderline.vue';
import Linkcard from './components/Linkcard.vue';
//
import MyLayout from './components/MyLayout.vue'
//
import mediumZoom from 'medium-zoom';
// 进度条组件
import {NProgress} from 'nprogress-v2/dist/index.js'




export default {
    extends: DefaultTheme,
    Layout: MyLayout,

    enhanceApp({app, router}) {
        if (inBrowser) {
            NProgress.configure({showSpinner: false})
            router.onBeforeRouteChange = () => {
                NProgress.start() // 开始进度条
            }
            router.onAfterRouteChanged = () => {
                busuanzi.fetch()
                NProgress.done() // 停止进度条
            }
        }

        // 注册全局组件
        app.component('DataPanel', DataPanel)
        app.component('ArticleMetadata', ArticleMetadata)
        app.component('xgplayer', Xgplayer)
        app.component('HomeUnderline', HomeUnderline)
        app.component('Linkcard', Linkcard)
    },

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