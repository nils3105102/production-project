import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
    });
    test('should return isLoading false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: false },
        };
        expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
    });
    test('should return isLoading false with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
    });
});
