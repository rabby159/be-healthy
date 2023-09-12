/* eslint-disable react/prop-types */


const Bookmark = ({bookmark}) => {

    return (
        <div className="mt-8 bg-white rounded p-3">
             <h2>{bookmark.title}</h2>
        </div>
    );
};

export default Bookmark;