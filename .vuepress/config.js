module.exports = {
  base: '/git-v/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'git-v',
      description: 'Semantic versioning tool.'
    }
  },
  themeConfig: {
    repo: 'bprinty/git-v',
    docsBranch: 'master',
    editLinks: true,
    sidebarDepth: 3,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        lastUpdated: 'Last Updated',
        editLinkText: 'Edit this page on GitHub',
        sidebar: ['/'],
      }
    }
  }
}
