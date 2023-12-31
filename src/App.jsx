import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] =useState(0)

  const handleBookmarks = blog => {
    const isExist = bookmarks.find((item) => item.id === blog.id);
    if(isExist){
      alert('Already added this blog')
    }
    else{
      const newBookmarks = [...bookmarks, blog]
      setBookmarks(newBookmarks);
    }
  }

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex justify-between container mx-auto gap-8'>
        <Blogs handleBookmarks={handleBookmarks}
        handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
