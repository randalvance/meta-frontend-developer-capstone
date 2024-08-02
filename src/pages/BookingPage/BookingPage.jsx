import { useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingForm } from './components/BookingForm';
import { fetchAPI, submitAPI  } from '../../api/api';

export const initialState = {
    availableTimes: [],
};

function reducer(state, action) {
    switch (action.type) {
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
            <BookingForm state={state} dispatch={dispatch} onSubmit={(formData) => {
                submitAPI(formData);
                navigate('/booking-confirmed');
            }} />
        </div>
    );
}