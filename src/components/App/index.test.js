import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './';

Enzyme.configure({
    adapter: new EnzymeAdapter()
});

describe('App component', () => {
    test('renders wihout errors', () => {
        const wrapper = shallow(<App />);
    });
});
