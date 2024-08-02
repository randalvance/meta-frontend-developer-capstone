import { render, screen } from '@testing-library/react';
import { initialState } from '../BookingPage';
import { BookingForm } from './BookingForm';
import { expect, test } from 'vitest';

test('Renders the BookForm heading', () => {
    render(<BookingForm state={initialState} dispatch={() => {}} onSubmit={() => {}} />);
    const headingElement= screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
});

test('Submit button should be disabled when form is invalid', () => {
    render(<BookingForm state={initialState} dispatch={() => {}} onSubmit={() => {}} />);
    const submitButton= screen.getByText("Make Your Reservation");
    expect(submitButton).toBeDisabled();
});