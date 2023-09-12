/* eslint-disable react/prop-types */
import { FcBookmark } from 'react-icons/fc';

const Blog = ({blog}) => {
    console.log(blog)
    const {id, cover_img, author_name, publish_date, reading_time, short_description, title, hashtags, author_img} = blog;
    return (
        <div className="mb-20">
            <div>
                <img className="w-full h-[450px]" src={cover_img} alt="" />
                <div className="my-5 flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                        <div>
                            <h5 className="text-xl font-semibold">{author_name}</h5>
                             <small>{publish_date}</small>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <p>{reading_time} min</p>
                        <button className='text-2xl'> <FcBookmark></FcBookmark></button>
                    </div>
                </div>
                <h2 className='text-3xl font-semibold'>{title}</h2>
                <p className='my-2'>{short_description}</p>
                <p className='mb-2'>
                    {
                        hashtags.map((hash, idx) => <span className='text-blue-500' key={idx}> #{hash}</span>)
                    }
                </p>
                <button className='text-violet-700 font-semibold underline'>Mark As a Read</button>
            </div>
        </div>
    );
};

export default Blog;