// @ts-check
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import embeds from 'astro-embed/integration';
import starlightAutoSidebar from 'starlight-auto-sidebar'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-python.github.io/website/',
	base: '/website',
	markdown: {
		remarkPlugins: [remarkReadingTime],
	},
	integrations: [
		embeds(),
		starlight({
			plugins: [
				starlightImageZoom(),
				starlightAutoSidebar(), // https://starlight-auto-sidebar.netlify.app/metadata/#label
			],
			title: 'Kursen Python',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/dbwebb-python-bth/website/tree/main',
			},
			social: {
				github: 'https://github.com/dbwebb-python-bth/website',
			},
			head: [
				{
					tag: 'script',
					attrs: {
						src: '/website/js/OpenDetailsFromHash.js',
						defer: true,
					},
				},
				{
					tag: 'base',
					attrs: {
						href: ''
					}
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					autogenerate: { directory: 'intro' },
				},
				{
					label: 'Kursmoment',
					autogenerate: { directory: 'kmom' },
				},
				{
					label: 'Läromaterial',
					collapsed: true,
					autogenerate: { directory: 'laromaterial' },
				},
				{
					label: 'Studieguide',
					collapsed: true,
					autogenerate: { directory: 'studieguide' },
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
				{
					label: 'Övrigt',
					collapsed: true,
					autogenerate: { directory: 'ovrigt' },
				},
			],
		}),
	],
});
