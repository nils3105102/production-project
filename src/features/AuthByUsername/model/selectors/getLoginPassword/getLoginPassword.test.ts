import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { password: 'test' },
        };
        expect(getLoginPassword(state as StateSchema)).toBe('test');
    });
    test('should return empty password', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toBe('');
    });
});
