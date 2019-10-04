import React, { Fragment, useContext, Suspense } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'
import { Router, Redirect } from '@reach/router'
import { Context } from './Context'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NoRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const {isAuth} = useContext(Context)

  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  //console.log(detailId)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles/>
      <Router>
        <NotFound default/>
        <Home path='/'/>
        <Home path='/pet/:id'/>
        <Detail path='/detail/:detailId'/>
        { !isAuth &&  <NoRegisteredUser path='/login'/>}
        { !isAuth &&  <Redirect from='/favs' to='/login'/>}
        { !isAuth &&  <Redirect from='/user' to='/login'/>}
        { isAuth &&  <Redirect from='/login' to='/'/>}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar/>
    </Suspense>
  )
}

