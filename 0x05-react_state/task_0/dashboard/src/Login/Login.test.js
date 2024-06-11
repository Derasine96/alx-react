import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('<Login />', () => {
  it('renders <Login /> without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(2);
    expect(wrapper.find('label').length).toEqual(2);
  });
  it('should have submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('should enable submit button after filling inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('should update isLoggedIn state on form submit', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', { target: { value: 'user@example.com' } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: 'password' } });
    wrapper.find('form').simulate('submit', { preventDefault: () => { } });
    expect(wrapper.state('isLoggedIn')).toBe(true);
  });
});
