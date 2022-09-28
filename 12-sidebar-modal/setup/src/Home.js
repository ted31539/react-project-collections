import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Home = () => {
  const {openSidebar, openModal} = useGlobalContext();
  return(
    <main>
      <button 
      onClick={openSidebar}
      type='button' className='sidebar-toggle'><FaBars /></button>
      <button 
       onClick={openModal}
      type='button' className='btn'>show modal</button>
    </main>
  )
}

export default Home
