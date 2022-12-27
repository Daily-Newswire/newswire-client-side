import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const SubmitYourWritings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
        toast.success('Submitted Successfully');
    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Submit Your Writing</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Topic</span></label>
                        <input type="text" {...register("topic", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <textarea className="textarea w-[97%] textarea-warning mt-5" placeholder="Write Here.."></textarea>
                    <input className='bg-yellow-400 p-3 rounded-xl text-semibold w-full mt-4' value="Submit" type="submit" />
                </form>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default SubmitYourWritings;