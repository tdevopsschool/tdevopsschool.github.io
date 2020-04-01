module.exports = {
  title: 'T-DevOps School',
  tagline: 'Запишись в группу прямо сейчас!',
  url: 'https://tdevopsschool.github.io/',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'T DevOps School', // Usually your GitHub org/user name.
  projectName: 'KnowledgeBase', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'T DevOps School',
      logo: {
        alt: 'T DevOps School',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/common_index',
          activeBasePath: 'docs',
          label: 'База знаний',
          position: 'left',
        },
        {to: 'blog', label: 'Новости', position: 'left'},
        {
          href: 'https://github.com/tdevopsschool',
          label: 'Наши Репозитории',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Правила оформления Markdown',
              to: 'docs/common_markdown_guide',
            },
            {
              label: 'Общий раздел',
              to: 'docs/common_index',
            },
            {
              label: 'Организационные вопросы',
              to: 'docs/org_index',
            },
            {
              label: 'Docker',
              to: 'docs/docker_index',
            },
            {
              label: 'Openshift/K8S',
              to: 'docs/osk8s_index',
            },
            {
              label: 'CM (Ansible)',
              to: 'docs/ansible_index',
            },
            {
              label: 'Linux',
              to: 'docs/linux_index',
            },
            {
              label: 'Builders Gradle/Maven/Ant',
              to: 'docs/builders_index',
            },
            {
              label: 'CI/CD',
              to: 'docs/cicd_index',
            },
          ],
        },
        {
          title: 'Комьюнити',
          items: [
            {
              label: 'Новости',
              to: 'blog',
            },
            {
              label: 'Trello',
              href: 'https://trello.com/tdevops/home',
            },
          ],
        },
        {
          title: 'Социальные сети',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tdevopsschool',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.com/tdevopsschool',
            },
          ],
        },
        {
          title: 'Официальные зеркала сайта',
          items: [
            {
              label: 'GitHub Pages',
              href: 'https://tdevopsschool.github.io',
            },
            {
              label: 'GitLab Pages',
              href: 'https://tdevopsschool.gitlab.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} T DevOps School, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
