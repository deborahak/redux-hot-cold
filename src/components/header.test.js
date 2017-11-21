import React from 'react';
import {shallow} from 'enzyme';

import Header from './header';

describe('<Header />', () =>{
	it('Renders without crashing', () => {
		shallow('<Header />');
	});

	   it('Initially hides info modal', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Renders info modal when toggled', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        wrapper.update();
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });

});