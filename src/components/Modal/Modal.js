import { React, useState } from 'react';
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

const Modal = ({ click, loginModal }) => {

    // const [loginModal, setLoginModal] = useState(false);

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm(defaultValues);
    const onSubmit = data => console.log(data);

    return (
        <form
            className={modalContainer}
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className={modalHeader}>
                <h2>
                    {loginModal ? 'Log in' : 'Sign up form'}
                </h2>
                <div onClick={click}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
            <p>
                {loginModal ?
                    `Please login with your credentials below.`
                    :
                    `Please follow the prompt to create your account. It's quick and easy.`
                }
            </p>
            <section className={userInformationContainer}>
                <div>
                    <label>
                        {loginModal ? 'Username' : 'Create Username'}
                    </label>
                    <input placeholder="Username" {...register("username", { required: true })} />
                </div>
                {
                    loginModal ? null :
                        <div>
                            <label>
                                Enter email address
                            </label>
                            <input
                                placeholder="Email Address" {...register("email", {
                                    required: "Email Address is required"
                                })}
                            // aria-invalid={errors.mail ? "true" : "false"}
                            />
                        </div>
                }
                <div>
                    <label>
                        {loginModal ? 'Enter password' : 'Create password'}
                    </label>
                    <input placeholder="Password" {...register("password", { required: true })} />
                </div>
                {loginModal ? null :
                    (
                        <>
                            <div>
                                <label>Select Gender</label>
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div>
                                <label>Enter Age</label>
                                <input placeholder="Enter Age" {...register("age", {
                                    required: true,
                                    pattern: {
                                        value: /\d+/,
                                        message: "This input is number only."
                                    }
                                })} />
                            </div>
                        </>
                    )
                }
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
            <HomePageButton title={loginModal ? 'Sign in' : 'Sign up'} />
            {/* {
                loginModal ?
                    <HomePageButton title='Close' />
                    : null
            } */}
        </form>
    );
};

export default Modal;