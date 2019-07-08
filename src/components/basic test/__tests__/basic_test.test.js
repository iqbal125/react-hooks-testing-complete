import React from 'react';
import ReactDOM from 'react-dom';
import Basic from '../basic_test';

import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

// import TestRenderer from 'react-test-renderer';
// import ShallowRenderer from 'react-test-renderer/shallow';


// Basic Test with React-test-renderer
// it('renders correctly react-test-renderer', () => {
//   const renderer = new ShallowRenderer();
//   renderer.render(<Basic />);
//   const result = renderer.getRenderOutput();
//
//   expect(result).toMatchSnapshot();
// });


// Basic Test with Enzyme
it('renders correctly enzyme', () => {
  const wrapper = shallow(<Basic />)

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders correctly enzyme', () => {
  const wrapper = mount(<Basic />)

  expect(toJson(wrapper)).toMatchSnapshot();
});
