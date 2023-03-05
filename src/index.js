import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { FluentProvider, webLightTheme} from '@fluentui/react-components';
import './i18n'

// import HttpApi from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import { initReactI18next } from 'react-i18next';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <BrowserRouter basename="/goit-react-hw-05-movies">
    <FluentProvider theme={webLightTheme }>
    <App />
    </FluentProvider>
    </BrowserRouter>
    </Suspense>
   </React.StrictMode>
);
// basename="/goit-react-hw-05-movies"
//theme={webDarkTheme}
