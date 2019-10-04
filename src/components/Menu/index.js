import React, { useContext } from 'react'
import { Context } from '../../Context'
import { Nav, Link, Image } from './styles'

export const Menu = () => {
  const { categories,showMenu, setShowMenu  } = useContext(Context)
  const handleClick = () => {
    setShowMenu(false)
  }
  return (
    <Nav showMenu={showMenu}>
      {
        categories.map(category => <Link to={`/pet/${category.id}`} key={category.id} onClick={handleClick}><Image src={category.cover}/></Link>)
      }
   </Nav>
  )
}