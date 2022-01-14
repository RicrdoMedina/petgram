import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token')
  })

  const [categories, setCategories] = useState([])
  const [showMenu, setShowMenu] = useState(false)
  const [showRegisterForm, setShowRegisterForm] = useState(false)
  const [fav, setFav] = useState(false)
  const [postSelected, setPostSelected] = useState(false)
  const [isLoadingCategories, setLoadingCategories] = useState(false)
  const [isLoadingPhotos, setLoadingPhotos] = useState(false)

  const value = {
    isAuth,
    isLoadingPhotos,
    setLoadingPhotos: (isLoadingPhotos) => { setLoadingPhotos(isLoadingPhotos) },
    isLoadingCategories,
    setLoadingCategories: (isLoadingCategories) => { setLoadingCategories(isLoadingCategories) },
    showRegisterForm,
    setShowRegisterForm: (showRegisterForm) => setShowRegisterForm(showRegisterForm),
    postSelected,
    setPostSelected: (postSelected) =>  setPostSelected(postSelected),
    fav,
    setFav: (fav) => setFav(fav),
    categories,
    setCategories: (categories) => setCategories(categories),
    showMenu,
    setShowMenu: (showMenu) => setShowMenu(showMenu),
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
