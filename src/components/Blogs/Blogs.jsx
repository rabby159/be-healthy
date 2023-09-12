/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks, handleReadingTime}) => {
    
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('content.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleReadingTime={handleReadingTime}></Blog>)
            }
        </div>
    );
};

export default Blogs;