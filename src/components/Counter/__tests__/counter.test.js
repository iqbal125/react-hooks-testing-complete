import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../counter';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// incorrect function assignment in the onClick method
// will still pass the tests.

test('the increment method increments count', () => {
  const wrapper = mount(<Counter />)

  expect(wrapper.instance().state.count).toBe(0)

  wrapper.find('button.counter-button').simulate('click')
  //alternatives
  //wrapper.setState({count: 1})
  // wrapper.instance().increment()
  expect(wrapper.instance().state.count).toBe(1)
})
