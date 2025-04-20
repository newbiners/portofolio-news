import React from 'react'
import Image from 'next/image'
import { IoPersonCircleOutline } from "react-icons/io5";
interface BlogCardProps {
    title: string
    description: string
    image: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, description, image }) => {
    return (
        <div className='p-3 border-green-500 border-2 flex flex-col items-center rounded-xl text-white w-full hover:drop-shadow-2xl hover:border-green-600'>
            <Image src={image} alt={title} width={500} height={300} className='w-full h-2/3 ' />
            <div className='w-full text-start h-1/3'>
                <p className='text-3xl font-extrabold mt-5 '>{title}</p>
                <desc>{description}</desc>
            </div>
            <div className='flex items-center w-full gap-2 mt-5 '>
                <IoPersonCircleOutline className='text-4xl' />
                <p>Author</p>
            </div>
        </div>
    )
}

export default BlogCard