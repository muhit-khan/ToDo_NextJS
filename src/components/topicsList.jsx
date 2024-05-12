import React from 'react'
import RemoveBTN from '@/components/removeBTN'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


const getTopics = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error('Failed to fetch topics')
        }
        const data = await res.json();
        // console.log("Topics data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching topics:", error);
    }
};

export default async function TopicsList() {
    try {
        const topics = await getTopics();
        // console.log("Topics:", topics);
        return (
            <>
                {topics && topics.map((topic) => (
                    <div key={topic._id} className='p-4 border-slate-600 shadow-sm my-3 flex justify-between gap-5'>
                        <div>
                            <h2 className='font-bold text-2xl'>{topic.title}</h2>
                            <div>{topic.description}</div>
                        </div>
                        <div className='flex gap-2 items-start'>
                            <RemoveBTN id={topic._id} />
                            <Link href={`/editTopic/${topic._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                        </div>
                    </div>
                ))}
            </>
        );
    } catch (error) {
        console.error("Error in TopicsList component:", error);
        return null;
    }
}
