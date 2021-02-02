import React from 'react';
import {shallow} from 'enzyme';

import HelloWorld from './HelloWorld';

describe('Hello world component', () => {
    it('should render as expected', () => {
        const component = shallow(<HelloWorld name={'your name'}/>);
        expect(component.contains('your name')).toBe(true);
    })
})

