import PropTypes from 'prop-types';

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const BookingForm = ({ state, dispatch }) => {
    return (
        <form style={{ display: 'grid', maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formatDate(state.date)} onChange={(e) => dispatch({ type: 'SET_DATE', payload: e.target.value })} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={state.time} onChange={(e) => dispatch({ type: 'SET_TIME', payload: e.target.value })}>
                {
                    state.availableTimes.map(timeOption => <option key={timeOption}>{timeOption}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={state.guests} onChange={(e) => dispatch({ type: 'SET_GUESTS', payload: e.target.value })} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={state.occasion} onChange={(e) => dispatch({ type: 'SET_OCCASION', payload: e.target.value })}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
};


BookingForm.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};