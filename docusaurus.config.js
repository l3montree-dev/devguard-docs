// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'FlawFix',
    tagline: 'Open-Source ISO 27001 compliant vulnerability management',
    favicon: '/favicon.ico',

    // Set the production url of your site here
    url: process.env.DEPLOYMENT_URL || 'https://flawfix.dev',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'l3montree-dev', // Usually your GitHub org/user name.
    projectName: 'flawfix', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            navbar: {
                logo: {
                    alt: 'FlawFix Logo',
                    src: 'img/logo_horizontal.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/l3montree-dev/flawfix',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            colorMode: {
                disableSwitch: true,
                defaultMode: 'light',
            },
            footer: {
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/docs/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/l3montree-dev/flawfix',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/Pm4pcbtnsk',
                            },
                        ],
                    },
                ],
            },
            prism: {
                // theme: prismThemes.github,
                theme: {
                    ...prismThemes.shadesOfPurple, plain: {
                        color: "#FBBD25", backgroundColor: "#172554"
                    }
                },
                announcementBar: {
                    id: 'support_us',
                    content:
                        'FlawFix is currently under development and is not yet available.',
                    backgroundColor: '#FAD34C',
                    textColor: 'black',
                    isCloseable: false,
                },
            }
        }),
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require('tailwindcss'))
                    postcssOptions.plugins.push(require('autoprefixer'))
                    return postcssOptions
                },
            }
        },
    ],
}



export default config
