import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Container } from './styles'
import { Logo } from '../Logo'
import { Bar } from '../Bar'
import { Context } from '../../Context'


export const Header = () => {
  const [showFixed, setShowFixed] = useState(false)
  const { setShowMenu } = useContext(Context)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      !newShowFixed && setShowMenu(false)
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <Container fixed={fixed}>
      { fixed && <Bar/>}
      <Logo fixed={fixed}/>
    </Container>
  )

  return (
    <Fragment>
      {renderList(showFixed)}
    </Fragment>
  )
}