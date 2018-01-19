import reducers from './reducers';
import {restartGame, makeGuess} from './actions';

describe('Reducer', () => {
	it('Should define initial state', () => {
		const state = reducer(undefined, {type: '_UNKNOWN'});

		expect(state.guesses).toEqual([]);
		expect(state.feedback).toEqual('Make your guess!');
		expect(state.correctAnswer).toBeLessThanOrEqual(0);
		expect(state.correctAnswer).toBeLessThanOrEqual(100);
	});

describe('makeGuess', () => {
	it('Should let player make a guess', () => {
		let state = {
			guesses: [],
			feedback: '',
			correctAnswer: 100
		};

		state = reducer(state, makeGuess(25));
        expect(state.guesses).toEqual([25]);
        expect(state.feedback).toEqual("You're Ice Cold...");

        state = reducer(state, makeGuess(60));
        expect(state.guesses).toEqual([25, 60]);
        expect(state.feedback).toEqual("You're Cold...");

        state = reducer(state, makeGuess(80));
        expect(state.guesses).toEqual([25, 60, 80]);
        expect(state.feedback).toEqual("You're Warm.");

        state = reducer(state, makeGuess(95));
        expect(state.guesses).toEqual([25, 60, 80, 95]);
        expect(state.feedback).toEqual("You're Hot!");

        state = reducer(state, makeGuess(100));
        expect(state.guesses).toEqual([25, 60, 80, 95, 100]);
        expect(state.feedback).toEqual('You got it!');

	});

});