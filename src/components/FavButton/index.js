import React, { useContext } from 'react'
import {Button, Like, ContentLoader ,LoaderLike, Text} from './styles'
import PropTypes from 'prop-types'
import { Context } from '../../Context'

export const FavButton = ({ liked, likes, onClick }) => {
  const { isLoadingPhotos } = useContext(Context)

  if (isLoadingPhotos) {
    return (
        <ContentLoader><LoaderLike/></ContentLoader>
    )
  }

  return (
    <Button className="favButton">
      <Like liked={liked} onClick={onClick}/>
      <Text>{likes} Me gusta</Text>
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}
