import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App.tsx';
import { ApolloProvider } from '@apollo/client/react';
import { client } from './apollo/client.ts';
import { LanguageProvider } from './providers/LanguageProvider.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ApolloProvider client={client}>
            <LanguageProvider >
                <App />
            </LanguageProvider>
        </ApolloProvider >
    </StrictMode>
);
