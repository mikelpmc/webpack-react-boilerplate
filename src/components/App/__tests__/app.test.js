import React from 'react';
import { mount } from 'enzyme';
import App from '../app';

describe('App component', () => {
  test('renders wihout errors', () => {
    mount(<App />);
  });
});
