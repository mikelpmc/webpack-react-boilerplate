import React from 'react';
import { mount } from 'enzyme';
import App from './app';

describe('App component', () => {
  test('renders wihout errors', () => {
    const wrapped = mount(<App />);

    const app = wrapped.find(App);
    expect(app.exists()).toBeTruthy();
  });
});
