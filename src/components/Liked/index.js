import React, {useContext, Fragment} from 'react'
import { MdFavorite } from "react-icons/md";
import { ContainerLike } from './styles'
import { Context } from '../../Context'

export const Liked = () => {
  const { fav,setFav } = useContext(Context)
  const { setPostSelected } = useContext(Context)

  if (fav) {
    setTimeout(() => {
      setFav(false)
      setPostSelected(null)
    }, 1500);
  }

  return(
    <Fragment>
      <ContainerLike>
        <MdFavorite size="62px" color="red"/>
      </ContainerLike>
    </Fragment>
  )
}