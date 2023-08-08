import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTestststs from 'shared/config/i18n/i18nForTests';
import { DeepPartial } from '@reduxjs/toolkit';

interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/', initialState } = options;
    render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTestststs}>{component}</I18nextProvider>
                ,
            </MemoryRouter>
        </StoreProvider>,
    );
};
