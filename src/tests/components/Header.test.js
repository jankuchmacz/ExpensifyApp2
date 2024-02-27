//react-test-renderer
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import React from 'react';
import Header from '../../components/Header';

import { shallow } from 'enzyme';

test('should render Header correctly', ()=>{
    /*const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();*/
    const wrapper = shallow(<Header/>);
    //expect(wrapper.find('h1').text()).toBe('Expensify');
    expect(wrapper).toMatchSnapshot();
});
