import PropTypes from "prop-types";
import { formOptions, useForm } from "@tanstack/react-form";

// function formatDate(date) {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
// }

export const BookingForm = ({ state, onSubmit }) => {
    const formOpts = formOptions({
        defaultValues: {
            reservationDate: state.date,
            reservationTime: state.time,
            guests: 1,
            occasion: state.occasion,
        },
    });
    const form = useForm({
        ...formOpts,
        onSubmit: ({ value }) => {
            onSubmit(value);
        }
    });
    return (
        <>
            <h1>Book Now</h1>
            <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }} onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}>
                <label htmlFor="reservationDate">Choose date</label>
                <form.Field name="reservationDate">
                    {(field) => (
                        <input
                            type="date"
                            id="res-date"
                            value={field.state.value}
                            onChange={(e) => field.handleChange(e.target.value)}
                        />
                    )}
                </form.Field>

                <label htmlFor="reservationTime">Choose time</label>
                <form.Field name="reservationTime">
                    {(field) => (
                        <select
                            id="reservationTime"
                            value={field.state.value}
                            required
                            onChange={(e) => { field.handleChange(e.target.value) }}
                        >
                            {state.availableTimes.map((timeOption) => (
                                <option key={timeOption}>{timeOption}</option>
                            ))}
                        </select>
                    )}
                </form.Field>

                <label htmlFor="guests">Number of guests</label>
                <form.Field name="guests">
                    {(field) => (
                        <input
                            type="number"
                            placeholder="1"
                            min="1"
                            max="10"
                            id="guests"
                            value={field.state.value}
                            onChange={(e) => { field.handleChange(+e.target.value); } }
                        />
                    )}
                </form.Field>
                <label htmlFor="occasion">Occasion</label>
                <form.Field name="occasion">
                    {
                        (field) => (
                            <select
                                id="occasion"
                                value={field.state.value}
                                required
                                onChange={(e) => {
                                    field.handleChange(e.target.value);
                                }}
                            >
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                        )
                    }
                </form.Field>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    );
};

BookingForm.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
