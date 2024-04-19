//react-test-renderer
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header correctly', ()=>{
    /*const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();*/
    const wrapper = shallow(<Header startLogout={()=>{}}/>);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});
test('should call startLogout on button click', ()=>{
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find('button').simulate('click');
    expect(startLogoutSpy).toHaveBeenLastCalledWith();
});
