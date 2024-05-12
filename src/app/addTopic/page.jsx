"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const AddTopic = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Title:", title);
        console.log("Description:", description);

        if (!title || !description) {
            setErrorMessage("Please fill all fields");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                window.alert("Task added successfully");
                setTitle('');
                setDescription('');
                router.push('/');
                router.refresh();
            } else {
                setErrorMessage("Failed to add Task");
            }
        } catch (error) {
            setErrorMessage("An error occurred");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='text-center'>
            {errorMessage && <p>{errorMessage}</p>}
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type='text'
                placeholder='Task Title'
                className='border-2 border-slate-600 p-2 w-full my-2'
            />
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                type='text'
                placeholder='Task Description'
                className='border-2 border-slate-600 p-2 w-full my-2'
            />

            <button
                type='submit'
                className='bg-green-700 py-3 w-fit px-6 text-white font-semibold rounded-md'>
                Add Task
            </button>
        </form>
    );
};

export default AddTopic;
