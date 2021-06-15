import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ExampleComponent, ExampleComponentProps } from './component';
configure({ adapter: new Adapter() });

describe('Component', () => {
  let defaultProps: ExampleComponentProps;

  beforeEach(() => {
    defaultProps = {
      className: undefined,
    };
  });

  describe('lib-common-js', () => {
    it('Renders', () => {
      let wrapper = shallow(<ExampleComponent {...defaultProps} />);
      expect(wrapper.find('.lib-common-js').text()).toBe('3');
    });
  });

  describe('lib-module', () => {
    it('Renders', () => {
      let wrapper = shallow(<ExampleComponent {...defaultProps} />);
      expect(wrapper.find('.lib-module').text()).toBe('3');
    });
  });

  describe('react-common-js', () => {
    it('Renders', () => {
      let wrapper = shallow(<ExampleComponent {...defaultProps} />);
      expect(wrapper.find('.react-common-js').text()).toBe('<ExampleComponent />');
    });
  });

  describe('react-module', () => {
    it('Renders', () => {
      let wrapper = shallow(<ExampleComponent {...defaultProps} />);
      expect(wrapper.find('.react-module').text()).toBe('<ExampleComponent />');
    });
  });
});
