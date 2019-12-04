import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile/>', () => {
   it('matches snapshot', () => {
       const utils = render(<Profile username="juliecho1993" name="julie" />);
       expect(utils.container).toMatchSnapshot();
   });
   it('shows the props correctly', () => {
       const utils = render(<Profile username="juliecho1993" name="julie" />);
       utils.getByText('juliecho1993'); // is there the el with the text, "juliecho1993"
       utils.getByText('(julie)'); // is there the el with the text (julie)
       utils.findAllByText(/ju/);
   })
});
