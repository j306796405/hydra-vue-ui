module.exports = {
    title: 'Hydra-vue-ui',
    base: '/hydra-vue-ui',
    description: 'another lightweight ui toolkit for Vue.js 2.X',
    port: 8083,
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '组件', link: '/components/guide/introduction'},
            {text: '主题', link: '/theme/'},
        ],
        sidebar: {
            '/components/': [
                {
                    title: '开发指南',
                    collapsable: false,
                    children: [
                        'guide/introduction',
                        'guide/guide'
                    ]
                },
                {
                    title: '基础组件',
                    collapsable: false,
                    children: [
                        'basic/button',
                        'basic/input',
                        'basic/form',
                        'basic/notice'
                    ]
                },
            ]
        }
    }
}
