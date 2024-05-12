import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center bg-slate-800 px-8 py-3'>
            <Link className=" text-white font-bold" href={"/"}>To Do List</Link>
            <Link className='bg-white p-w p-2 font-semibold rounded-md' href={"/addTopic"}>Add Task</Link>
        </nav>
    )
}

export default Navbar