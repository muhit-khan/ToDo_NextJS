import React from 'react'
import EditTopicForm from '@/components/editTopicForm'


const getTopicbyID = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store",
        })

        if (!res.ok) {
            throw new Error('Failed to fetch Task')
        }
        const data = await res.json();
        // console.log("Task data:", data);
        return data;
    } catch (error) {
        console.error("Error fetching Task:", error);
    }

}


const EditTopic = async ({ params }) => {
    const { id } = params;
    const topic = await getTopicbyID(id);
    // console.log("ID:", id);
    const { title, description } = topic;
    return (
        <div>
            <EditTopicForm
                id={id}
                title={title}
                description={description}
            />
        </div>
    )
}

export default EditTopic