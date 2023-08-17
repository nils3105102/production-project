import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { username: 'test' },
        };
        expect(getLoginUsername(state as StateSchema)).toBe('test');
    });
    test('should return empty username', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toBe('');
    });
});
