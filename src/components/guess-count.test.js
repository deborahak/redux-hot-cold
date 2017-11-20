import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from './guess-count';

describe('<GuessCount />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessCount />);
	});

	it('Renders correct number of guesses', () => {
		const value = 3;
		const wrapper = shallow(<GuessCount count={value} />);
		expect(wrapper.text()).toEqual(`Guess #${value}!`);
	});
});

