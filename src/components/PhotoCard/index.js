import React,{useContext,Fragment} from 'react'
import {Article, Content, ImgWrapper, Img, LoaderPhotos } from './styles'
import { navigate } from '@reach/router'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Liked } from '../Liked'
import { Context } from '../../Context'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"
import PropTypes from 'prop-types'

export const PhotoCard = ({id = 0, liked = false, likes = 0, src = DEFAULT_IMAGE}) => {
  const [show, element] = useNearScreen()
  const { postSelected, setPostSelected } = useContext(Context)
  const { setFav } = useContext(Context)
  const { isLoadingPhotos } = useContext(Context)
  const {isAuth} = useContext(Context)
  
  const handleClick = (e) => {
    const event = e
    if (event.target.classList.contains('post') || event.target.classList.contains('favButton')) navigate(`/detail/${id}`)
  }

  return (
      <Article ref={element} onClick={handleClick} className="post">
        {
          show && <Fragment>
            <ToggleLikeMutation>
              {
                (togglelike) => {

                  const handleDoubleClick = (id) => {
                    if (isAuth) {
                      setPostSelected(id)
                      setFav(true)
                      !liked && togglelike({ variables: { input: {id}}})
                    } else {
                      navigate(`/login`)
                    }
                  }

                  const handleFavClick = () => {
                    if (isAuth) {
                      togglelike({ variables: { input: {id}}})
                    } else {
                      navigate(`/login`)
                    }
                  }

                  return  <Fragment>
                            { isLoadingPhotos && (<Content>
                              <ImgWrapper>
                                <LoaderPhotos/>
                              </ImgWrapper>
                              <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                            </Content>)
                            }
                            { !isLoadingPhotos && (<Content>
                              <ImgWrapper onDoubleClick = {() => handleDoubleClick(id)} widthShadow={true}>
                                { postSelected === id && <Liked/>}
                                <Img src={src}/>
                              </ImgWrapper>
                              <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                            </Content>)
                            }
                          </Fragment>
                }
              }
            </ToggleLikeMutation>
        </Fragment>
        }
      </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}