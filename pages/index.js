import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
import Banner from '../components/partials/banner'
import Navbar from '../components/partials/navbar'

const Home = () => {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('/api/todos')
        setTodos(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchTodos()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/todos', { title })
      setTitle('')
      const response = await axios.get('/api/todos')
      setTodos(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async id => {
    try {
      await axios.delete(`/api/todos/${id}`)
      const response = await axios.get('/api/todos')
      setTodos(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='p-0 m-0'>
      <Navbar />
      <Banner />
      <section className='bg-gray-100 p-7'>
        <div className="container mx-auto">
          <h2 className="font-bold text-3xl text-black">Popular Artwork</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 my-5">
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/7d/9d/76/7d9d76533b772befd865deb281000b21.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/16/a7/a4/16a7a40fe4056ec0d8d27c30dcc95568.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/750x/d3/a7/2a/d3a72aa35a765444fb71e2a1f80382bf.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/52/47/7e/52477e09d81d0591226cbffcb84dd60c.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/5c/e7/3f/5ce73ff3a14f113152fce2847b713932.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/51/fc/d0/51fcd069c2ad804ef32f21c07668a078.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/df/8e/08/df8e085f5a486b8b341e79e059365aa2.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
            <Link href="/product" className='mb-4 block rounded-3xl overflow-hidden bg-white'>
              <img src={"https://i.pinimg.com/236x/e6/40/9f/e6409f4150706fe33dc9197341db0172.jpg"} alt="" className="block w-full" />
              <div className="p-5">
                <h3 className="font-bold text-xl">Amazing Artwork Pop Art</h3>
                <div className="mt-2 flex items-ceter gap-3">
                  <div className="pr-3 border-r-2 border-gray-300">Stock : <strong>42</strong></div>
                  <div><strong>Rp. 43.000.000</strong></div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
