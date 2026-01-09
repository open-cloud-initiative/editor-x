export const siteConfig = {
    name: 'Editor X',
    url: 'https://open-cloud-initiative.github.io/editor-x/',
    author: 'Sebastian Döll (@katallaxie)',
    authorUrl: 'https://github.com/katallaxie',
    links: {
        github: 'https://github.com/open-cloud-initiative/editor-x',
    },
}

export type SiteConfig = typeof siteConfig

export const navConfig = {
    mainNav: [{ title: siteConfig.name, path: '/' }],
}
