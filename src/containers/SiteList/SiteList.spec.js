import 'jsdom-global/register';
import {expect} from 'chai';
import nock from 'nock';
import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {I18nextProvider} from 'react-i18next';
import i18next from 'i18next';
import configureStore from '../../store/configureStore';
import translation from '../../assets/locale/messages_en.json';
import {getTestBaseUrl} from '../../../test/test-common';
import SiteList from './SiteList';

const i18nData = {
  lng: 'en',
  keySeparator: '$',
  resources: {
    en: {translation}
  }
};

class SiteListDriver {

  baseUrl = getTestBaseUrl();

  given = {
    siteListValidData: () => {
      this.sites = [
        {
          id: 1,
          siteName: 'my cool site'
        }, {
          id: 2,
          siteName: 'another cool site'
        }, {
          id: 3,
          siteName: 'a different cool site'
        }];

      nock(this.baseUrl).get('/sites').reply(200, this.sites);

      return this;
    }
  };
  when = {
    created: () => {
      const store = configureStore();
      this.component = mount(
        <Provider store={store}>
          <I18nextProvider i18n={i18next.init(i18nData)}>
            <SiteList/>
          </I18nextProvider>
        </Provider>
      );
      return this;
    }
  }

  get = {
    mockedSites: () => this.sites,
    sites: () => this.component.find('.site')

  }
}

describe('SiteList container component', () => {
  let driver;
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  beforeEach(() => {
    driver = new SiteListDriver();
  });

  afterEach(() => cleanup());

  it('should display sites', done => {
    driver.given.siteListValidData()
      .when.created();
    setTimeout(() => {
      expect(driver.get.sites().length).to.equal(3);
      expect(driver.get.sites().first().text()).to.equal(driver.get.mockedSites()[0].siteName);
      done();
    }, 1000);
  });
});
