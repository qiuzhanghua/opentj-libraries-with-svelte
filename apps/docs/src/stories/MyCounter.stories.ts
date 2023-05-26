import type { Meta, StoryObj } from '@storybook/svelte';

import { MyCounter } from '../../../../packages/core/src';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
	title: 'OpenTJ/Counter',
	component: MyCounter,
	tags: ['autodocs']
} satisfies Meta<MyCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const My: Story = {
	args: {
		label: 'MyCounter'
	}
};
