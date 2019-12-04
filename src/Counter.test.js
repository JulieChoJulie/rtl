import React from 'react';
import Counter from './Counter';
import { render, fireEvent } from '@testing-library/react';

describe('<Counter/>', () => {
    it('matches snapshot', () => {
        const utils = render(<Counter />);
        expect(utils.container).toMatchSnapshot();
    });
    it('has a number and two buttons', () => {
        const utils = render(<Counter />);
        utils.getByText('0');
        utils.getByText('+1');
        utils.getByText('-1');
    });
    it('increases', () => {
        const utils = render(<Counter />);
        const number = utils.getByText('0');
        const plustButton = utils.getByText('+1');
        // trigger click event twice
        fireEvent.click(plustButton);
        fireEvent.click(plustButton);
        expect(number).toHaveTextContent('2'); //jest-dom extense
    });
    it('decreases', () => {
        const utils = render(<Counter />);
        const number = utils.getByText('0');
        const minusButton = utils.getByText('-1');
        // trigger click event twice
        fireEvent.click(minusButton);
        fireEvent.click(minusButton);
        expect(number).toHaveTextContent('-2');
    })
})