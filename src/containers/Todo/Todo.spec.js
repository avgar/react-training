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
import TodoList from './../Todo/Todo';

const i18nData = {
  lng: 'en',
  keySeparator: '$',
  resources: {
    en: {translation}
  }
};

class TodoDriver {

  when = {
    created: () => {
      const store = configureStore();
      this.component = mount(
          <Provider store={store}>
            <I18nextProvider i18n={i18next.init(i18nData)}>
              <TodoList tasks={[{id:0, text: 'text1'}, {id:1, text: 'text2'}]}/>
            </I18nextProvider>
          </Provider>
      );
      return this;
    }
  }

  get = {
    tasks: () => this.component.find('.task')

  }

}


describe('todo component', () => {

  let driver;
  let cleanup;

  beforeEach(() => cleanup = require('jsdom-global')());

  beforeEach(() => {
    driver = new TodoDriver();
    driver.when.created([{id: 0, text: 'text1'}, {id: 1, text: 'text2'}])
  });

  afterEach(() => cleanup());

  it('should show list with 2 items', () => {
    console.log(driver.component.html())
    expect(driver.get.tasks().length).to.eq(2)
})
})
