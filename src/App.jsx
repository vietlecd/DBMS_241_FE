import { useState, useEffect } from 'react'
import './index.css'
import Header from './components/Header'
import Banner from './components/Banner'
import BookList from './components/BookList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black pb-10'>
        <Header />
        <Banner />
        <BookList title={"Sách Đề Cử"}/>
        <BookList title={"Sách Miễn Phí"}/>
      </div>
    </>
  )
}

export default App
