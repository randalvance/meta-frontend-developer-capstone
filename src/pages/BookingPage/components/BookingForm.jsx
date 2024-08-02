import PropTypes from "prop-types";
import { formOptions, useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter"
import { z } from "zod"
import styles from "./BookingForm.module.css";

export const BookingForm = ({ state, onSubmit }) => {
    const formOpts = formOptions({
        defaultValues: {
            reservationDate: new Date(),
            reservationTime: "",
            guests: 1,
            occasion: ''
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
            <form className={styles.form} onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
            }}>
                <form.Field
                    name="reservationDate"
                    validatorAdapter={zodValidator()}
                    validators={{
                        onChange: z.string().min(1, "Required").date("Invalid Date")
                    }}
                >
                    {(field) => (
                        <>
                            <label htmlFor="reservationDate">Choose date</label>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <input
                                    type="date"
                                    id="res-date"
                                    value={field.state.value}
                                    onChange={(e) => field.handleChange(e.target.value)}
                                    style={{ width: "300px" }}
                                    aria-labelledby="reservationDate"
                                    aria-invalid={field.state.meta.errors ? "true" : "false"}
                                />
                                {field.state.meta.errors ? (
                                    <p className="error" role="alert">{field.state.meta.errors.join(",")}</p>
                                ) : null}
                            </div>
                        </>
                    )}
                </form.Field>


                <form.Field
                    name="reservationTime"
                    validatorAdapter={zodValidator()}
                    validators={{
                        onChange: z.string().min(1, "Required")
                    }}
                >
                    {(field) => (
                        <>
                            <label htmlFor="reservationTime">Choose time</label>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <select
                                    id="reservationTime"
                                    value={field.state.value}
                                    required
                                    onChange={(e) => { field.handleChange(e.target.value) }}
                                    style={{ width: "305px" }}
                                    aria-labelledby="reservationTime"
                                    aria-invalid={field.state.meta.errors ? "true" : "false"}
                                >
                                    <option value="">Select a time</option>
                                    {state.availableTimes.map((timeOption) => (
                                        <option key={timeOption}>{timeOption}</option>
                                    ))}
                                </select>
                                {field.state.meta.errors ? (
                                    <p className="error" role="alert">{field.state.meta.errors.join(",")}</p>
                                ) : null}
                            </div>
                        </>
                    )}
                </form.Field>

                <form.Field
                    name="guests"
                    validatorAdapter={zodValidator()}
                    validators={{
                        onChange: z.number().min(1).max(32)
                }}>
                    {(field) => (
                        <>
                            <label htmlFor="guests">Number of guests</label>
                            <div style={{ display: "flex", gap: "8px" }}>
                                <input
                                    type="number"
                                    placeholder="1"
                                    min="1"
                                    max="10"
                                    id="guests"
                                    value={field.state.value}
                                    onChange={(e) => { field.handleChange(+e.target.value); }}
                                    style={{ width: "298px" }}
                                    aria-labelledby="guests"
                                    aria-invalid={field.state.meta.errors ? "true" : "false"}
                                />
                                {field.state.meta.errors ? (
                                    <p className="error" role="alert">{field.state.meta.errors.join(",")}</p>
                                ) : null}
                            </div>
                        </>
                    )}
                </form.Field>
                <form.Field
                    name="occasion"
                    validatorAdapter={zodValidator()}
                    validators={{
                        onChange: z.string().min(1, "Required")
                }}>
                    {
                        (field) => (
                            <>
                                <label htmlFor="occasion">Occasion</label>
                                <div style={{ display: "flex", gap: "8px" }}>
                                    <select
                                        id="occasion"
                                        value={field.state.value}
                                        required
                                        onChange={(e) => {
                                            field.handleChange(e.target.value);
                                        }}
                                        style={{ width: "305px" }}
                                        aria-labelledby="occasion"
                                        aria-invalid={field.state.meta.errors ? "true" : "false"}
                                    >
                                        <option value="">Select an occasion</option>
                                        <option value="Birthday">Birthday</option>
                                        <option value="Anniversary">Anniversary</option>
                                    </select>
                                    {field.state.meta.errors ? (
                                        <p className="error" role="alert">{field.state.meta.errors.join(",")}</p>
                                    ) : null}
                                </div>
                            </>
                        )
                    }
                </form.Field>

                <form.Subscribe
                    selector={((state) => [state.canSubmit, state.isSubmitting])}
                >
                    {({canSubmit, isSubmitting}) => (
                        <input disabled={!canSubmit || isSubmitting} className={styles.submitButton} type="submit" value="Make Your Reservation" />
                    )}
                </form.Subscribe>
            </form>
        </>
    );
};

BookingForm.propTypes = {
    state: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};
