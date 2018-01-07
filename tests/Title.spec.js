import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import Title from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Title', () => {
  it('should render correctly', () => {
    mount(<Title />);
  });
});
