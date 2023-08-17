import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: 'dsadsadsadasda',
        title: 'qdqsad1232131',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'dsadas',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'dsadsadfvzxvzc',
    },
};

export const PrimaryDark: Story = {
    args: {
        text: 'dsadsadsadasda',
        title: 'qdqsad1232131',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'dsadas',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'dsadsadfvzxvzc',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Error: Story = {
    args: {
        title: 'dsadsadfvzxvzc',
        text: 'dsadsadfvzxvzc',
        theme: TextTheme.ERROR,
    },
};
