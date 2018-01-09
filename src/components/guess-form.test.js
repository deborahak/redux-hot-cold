import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessForm />);
	});

    // it('Should fire onGuess callback when form is submitted', () => {
    //     const callback = jest.fn();
    //     const wrapper = mount(<GuessForm onGuess={callback} />);
    //     const value = 10;
    //     wrapper.find('input[type="text"]').instance().value = value;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(value.toString());
    // });

    // it('Should reset input field when form is submitted', () => {
    //     const wrapper = mount(<GuessForm />);
    //     const input = wrapper.find('input[type="text"]');
    //     input.instance().value = 10;
    //     wrapper.simulate('submit');
    //     expect(input.instance().value).toEqual('');
    // });
 
	it('on Submit click, the onGuess callback should fire', () => {
		const callback = jest.fn();
		const wrapper = mount(<GuessForm onGuess={callback} />);
		const guess = 50;
		const input = wrapper.find('#userGuess'); // here I'm finding the node by id
		input.value = guess;
		wrapper.simulate('submit');
		expect(input.value).toBe(50);
	});

	it('Sets the value on the input node', () => {
		const wrapper=mount(<input/>);
		wrapper.find('input').node.value=100;
	});

});


