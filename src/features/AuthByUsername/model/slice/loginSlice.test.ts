import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice', () => {
    test('set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test'))).toEqual({
            username: 'test',
        });
    });

    test('set username schould work with empty state', () => {
        expect(loginReducer(undefined, loginActions.setUsername('test'))).toEqual({
            isLoading: false,
            password: '',
            username: 'test',
        });
    });

    test('set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '',
        };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('test'))).toEqual({
            password: 'test',
        });
    });

    test('set password schould work with empty state', () => {
        expect(loginReducer(undefined, loginActions.setPassword('test'))).toEqual({
            password: 'test',
            isLoading: false,
            username: '',
        });
    });

    test('login is pending', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('login is fulfilled', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };
        expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled)).toEqual({
            isLoading: false,
        });
    });

    test('login is rejected', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: true,
        };
        expect(loginReducer(state as LoginSchema, loginByUsername.rejected)).toEqual({
            isLoading: false,
            error: undefined,
        });
    });
});
