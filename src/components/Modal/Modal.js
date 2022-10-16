import React from 'react';
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import HomePageButton from '../HomePageButton/HomePageButton';
import classes from './Modal.module.scss';

const { modalContainer, modalHeader, userInformationContainer } = classes;

const defaultValues = {
    Native: "",
    TextField: "",
    Select: "",
    ReactSelect: { value: "vanilla", label: "Vanilla" },
    Checkbox: false,
    switch: false,
    RadioGroup: "",
    numberFormat: 123456789,
    downShift: "apple"
};

const Modal = ({ click }) => {

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm(defaultValues);

    return (
        <form className={modalContainer}>
            <div class={modalHeader}>
                <h2>Sign up form</h2>
                <div onClick={click}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <p>Please follow the prompt to create your account. It's quick and easy.</p>
            <section className={userInformationContainer}>
                <div>
                    <label>Create Username</label>
                    <input placeholder="Username" {...register("username", { required: true })} />
                </div>
                <div>
                    <label>Enter email address</label>
                    <input placeholder="Email Address" {...register("email", { required: true })} />
                </div>
                <div>
                    <label>Create password</label>
                    <input placeholder="Password" {...register("password", { required: true })} />
                </div>

                {/* <Controller
                    control={control}
                    name="ReactDatepicker"
                    render={({ field }) => (
                        <ReactDatePicker
                            placeholderText='Select date'
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                        />
                    )}
                /> */}
            </section>

            <HomePageButton title="Sign Up" />

        </form>
    );
};

export default Modal;