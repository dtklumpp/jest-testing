import React from 'react';
import {shallow} from 'enzyme';

import Counter from './Counter';

describe('Counter component', () => {
    let component;
    beforeEach(() => {
        component = shallow(<Counter/>)
    })

    it('should have a header that says Counter', () => {
        expect(component.contains(<h1>Counter</h1>)).toBe(true);
    })

    it('should have a state attribute called number initialized to zero', () => {
        expect(component.state('number')).toEqual(0)
    })

    it('should display the current number in an element with a classname number', () => {
        expect(component.find('.number').text()).toEqual('0')
    })

    it('should have a button with a class of plus that increases the number in state', () => {
        component.find('.plus').simulate('click')
        expect(component.state('number')).toEqual(1)
    })
})
