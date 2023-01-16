module.exports = {
    title: "chh's Blog",
    base: '/myblog/',
    dest: './dist',
    theme: '@vuepress/theme-blog',
    repo: 'https://github.com/changhengheng/myblog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [
            {
                text: 'blog',
                link: '/blog/'
            },
            {
                text: '碎碎念',
                link: '/informalessay/',
            },
            {
                text: '阅读',
                link: '/reading/',
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/changhengheng/myblog',
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
                title: '碎碎念',
                itemPermalink: '/informalessay/:year/:month/:day/:slug',
                frontmatter: { //Front matter for entry page.
                    tag: 'informalessay'
                },
            },
            {
                id: 'blog',
                dirname: '_blog',
                path: '/blog/',
                title: '博客',
                itemPermalink: '/blog/:year/:month/:day/:slug',
                frontmatter: { //Front matter for entry page.
                    tag: 'blog'
                },
            },
            {
                id: 'reading',
                dirname: '_reading',
                path: '/reading/',
                title: '阅读',
                itemPermalink: '/reading/:year/:month/:day/:slug',
                frontmatter: { //Front matter for entry page.
                    tag: 'reading'
                },
            },
        ],
        smoothScroll: true,
    },
}