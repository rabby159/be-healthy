/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-slate-100 ">
            <div>
                <h2 className="mb-5 text-xl text-center font-semibold bg-sky-300 p-3">Total time to read blogs: {readingTime} min</h2>
            </div>
             <div className="p-5">
             <h2 className="text-2xl font-semibold text-center mb-3 text-red-500">Bookmarks</h2>
             <h2 className="text-xl font-semibold">Total Blogs: {bookmarks.length}</h2>
             {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
             }
             </div>
        </div>
    );
};

export default Bookmarks;