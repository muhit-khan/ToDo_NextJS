'use client'

import React, { use } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });
            if (res.ok) {
                console.log('Topic Updated');
                router.push('/');
                router.refresh();
            } else {
                console.error('Failed to update topic');
            }
        } catch (error) {
            console.error('Failed to update topic:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='text-center'>
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                type='text'
                placeholder='Updated Topic Title'
                className='border-2 border-slate-600 p-2 w-full my-2'
            />
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                type='text'
                placeholder=' Updated Topic Description'
                className='border-2 border-slate-600 p-2 w-full my-2'
            />

            <button className='bg-green-700 py-3 w-fit px-6 text-white font-semibold rounded-md'>
                Update Task
            </button>

        </form>
    )
}

export default EditTopicForm