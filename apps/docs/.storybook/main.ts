import type { StorybookConfig } from '@storybook/sveltekit';
const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	docs: {
		autodocs: 'tag'
	},
	core: {
		builder: '@storybook/builder-vite'
	}
	// async viteFinal(config, { configType }) {
	// 	// customize the Vite config here
	// 	return {
	// 		...config,
	// 		resolve: {
	// 			alias: [
	// 				{
	// 					find: "@opentj/core",
	// 					replacement: path.resolve(
	// 						__dirname,
	// 						"../../../packages/core/"
	// 					),
	// 				},
	// 			],
	// 		},
	// 	};
	// },
};
export default config;
