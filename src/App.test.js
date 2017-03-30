import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

const wrapper = props => shallow(<App {...props} />);

describe('<App />', () => {
  it('renders without crashing', () => {
    expect(
      wrapper().instance(),
    ).toBeInstanceOf(App);
  });

  it('Should render foo bar', () => {
    expect(
      wrapper().find('.test-prop').text(),
    ).toEqual('foo bar');
  });

  it('Should render test prop', () => {
    expect(
      wrapper({
        test: 'Hello world'
      }).find('.test-prop').text()
    ).toEqual('Hello world');
  });

  it('Should handle `onClick`', () => {
    const onClick = jest.fn();

    const component = wrapper({
      onClick,
    });

    component.find('.App').simulate('click');

    expect(
      onClick,
    ).toHaveBeenCalledTimes(1);

    expect(
      onClick,
    ).toHaveBeenCalledWith('foo bar');
  });

  it('Should click element without crashing', () => {
    const component = wrapper();

    component.find('.App').simulate('click');
  });
});
