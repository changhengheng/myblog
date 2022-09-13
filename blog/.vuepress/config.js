module.exports = {
    title: "chh's Blog",
    base: '/myblog/',
    dest: './dist',
    theme: '@vuepress/theme-blog',
    repo: 'https://github.com/changhengheng/myblog',
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            platform: 'github-v4',
            owner: 'changhengheng',
            repo: 'myblog',
            clientId: '93bb6d5b29cac8573045',
            clientSecret: '22c10df6736bfd771eca1595d4501d1311b530d6',
        },
    },
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'Blog',
                link: '/informalessay/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/changhengheng/VuePressBlog',
                },
            ],
            copyright: [
                {
                    text: 'MIT Licensed | Copyright © 2022-present Vue.js',
                },
            ],
        },
        directories: [
            {
                id: 'informalEssay',
                dirname: '_informalEssay',
                path: '/informalessay/',
                title: '博客',
                itemPermalink: '/informalessay/:year/:month/:day/:slug',
                frontmatter: { //Front matter for entry page.
                    tag: 'informalessay'
                },
            },
        ],
        smoothScroll: true,
    },
}