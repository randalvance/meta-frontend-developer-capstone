import { useMemo, useState } from 'react';

const availableTimes = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const BookingForm = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('17:00');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const formattedDate = useMemo(() => formatDate(date), [date]);

    return (
        <form style={{ display: 'grid', maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={formattedDate} onChange={(e) => {
                console.log(e.target.value);
                setDate(new Date(e.target.value));
            }} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => {
                setTime(e.target.value);
            }}>
                {
                    availableTimes.map(timeOption => <option key={timeOption}>{timeOption}</option>)
                }
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => {
                setGuests(e.target.value);
            }} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => {
                setOccasion(e.target.value);
            }}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>
    )
};