import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTestststs from 'shared/config/i18n/i18nForTests';

interface ComponentRenderOptions {
    route?: string;
}

export const componentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const { route = '/' } = options;
    render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTestststs}>{component}</I18nextProvider>
            ,
        </MemoryRouter>,
    );
};
