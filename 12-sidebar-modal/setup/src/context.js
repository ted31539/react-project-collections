import React, { useState, useContext, createContext } from 'react'

const appContext = createContext();

const AppProvider= ({children})=> {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = ()=> {
    setIsModalOpen(true);
  }
  
  const closeModal = ()=> {
    setIsModalOpen(false);
  }
  
  const openSidebar = ()=> {
    setIsSidebarOpen(true);
  }
  
  const closeSidebar = ()=> {
    setIsSidebarOpen(false);
  }
  
  return (
    <appContext.Provider value={ {isSidebarOpen, isModalOpen ,openModal, closeModal, openSidebar, closeSidebar} }>
      {children}
    </appContext.Provider>
  )
}

export const useGlobalContext = ()=> useContext(appContext);

export {appContext, AppProvider};
