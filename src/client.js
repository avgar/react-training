import 'babel-polyfill';
import 'isomorphic-fetch';
import 'es6-promise/auto';
import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App/App';
import {clientFetchUtils} from 'wix-fetch-utils';
import {I18nextProvider} from 'react-i18next';
import i18n from './i18n';

const basename = window.__BASENAME__;
const locale = window.__LOCALE__;
const baseUrl = window.__STATICS_BASE_URL__;
clientFetchUtils(basename);
const rootElement = document.getElementById('root');
const store = configureStore();

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n({locale, baseUrl})}>

            <App/>
    </I18nextProvider>
  </Provider>,
  rootElement
);
