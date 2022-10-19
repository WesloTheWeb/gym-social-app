import React from 'react';
import { useForm, Controller } from "react-hook-form";

import classes from './UserStatus.module.scss';

const { userStatusContainer } = classes;

const UserStatus = (props) => {

    //TODO: Create function that usesForm hook data as payload for submit button to handlepost.
    const handleStatus = (evnt) => {
        // updates form here may need state.
    }

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

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm(defaultValues);
    const onSubmit = data => console.log(data);

    return (
        <div className={userStatusContainer}>
            <input
            type='text'
            placeholder="What shall we lift today?"
             {...register("updateStatus", { required: false })} />
            <button>Post Status</button>
        </div>
    );
};

export default UserStatus;