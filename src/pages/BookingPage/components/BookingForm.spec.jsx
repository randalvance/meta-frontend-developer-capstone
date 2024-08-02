import { render, screen } from '@testing-library/react';
import { initialState } from '../BookingPage';
import { BookingForm } from './BookingForm';
import { expect, test } from 'vitest';

test('Renders the BookForm heading', () => {
    render(<BookingForm state={initialState} dispatch={() => {}} />);
    const headingElement= screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});