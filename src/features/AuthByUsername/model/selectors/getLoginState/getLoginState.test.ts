import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('should return login state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: '', isLoading: false, password: '123', username: 'admin',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            error: '', isLoading: false, password: '123', username: 'admin',
        });
    });
    test('should return empty login state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
