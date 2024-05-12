'use client'

import React from 'react';
import { HiTrash } from 'react-icons/hi';
import { useRouter } from 'next/navigation';

const RemoveBTN = ({ id }) => {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this topic?");
        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE',
            });

            if (res.ok) {
                alert("Topic deleted successfully")
                router.refresh();
            } else {
                throw new Error('Failed to delete topic')
            }
        }
    };

    return (
        <button onClick={removeTopic} className='text-red-600'>
            <HiTrash size={24} />
        </button>
    );
};

export default React.memo(RemoveBTN);