import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({ loginForm: { username: '123', password: 'dsad' } })],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithError: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            error: 'ERROR',
        },
    })],
};

export const WithLoading: Story = {
    decorators: [StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    })],
};
