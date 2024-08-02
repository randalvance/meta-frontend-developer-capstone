import { useReducer } from 'react';
import { BookingForm } from './components/BookingForm';


const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];

export const initialState = {
    date: new Date(),
    time: '17:00',
    guests: 1,
    occasion: 'Birthday',
    availableTimes,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_DATE':
            return { ...state, date: new Date(action.payload) };
        case 'SET_TIME':
            return { ...state, time: action.payload };
        case 'SET_GUESTS':
            return { ...state, guests: action.payload };
        case 'SET_OCCASION':
            return { ...state, occasion: action.payload };
        default:
            return state;
    }
}

export default function BookingPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <BookingForm state={state} dispatch={dispatch} />
        </div>
    );
}