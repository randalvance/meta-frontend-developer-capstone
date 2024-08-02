import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingForm } from './components/BookingForm';
import { fetchAPI, submitAPI  } from '../../api/api';


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
            // eslint-disable-next-line no-case-declarations
            const selectedDate = new Date(action.payload);
            // eslint-disable-next-line no-case-declarations
            const availableTimes = fetchAPI(selectedDate);
            return { ...state, date: new Date(action.payload), availableTimes };
        case 'SET_TIME':
            return { ...state, time: action.payload };
        case 'SET_GUESTS':
            return { ...state, guests: action.payload };
        case 'SET_OCCASION':
            return { ...state, occasion: action.payload };
        case 'SET_AVAILABLE_TIMES':
            return { ...state, availableTimes: action.payload };
        default:
            return state;
    }
}

export default function BookingPage() {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const availableTimes = fetchAPI(new Date());
        dispatch({ type: 'SET_AVAILABLE_TIMES', payload: availableTimes });
    }, []);

    return (
        <div>
            <BookingForm state={state} dispatch={dispatch} onSubmit={() => {
                submitAPI({
                    date: state.date,
                    time: state.time,
                    guests: state.guests,
                    occasion: state.occasion,
                });
                navigate('/booking-confirmed');
            }} />
        </div>
    );
}