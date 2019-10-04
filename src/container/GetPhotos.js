import React, { useContext } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfPhotoCardComponent } from '../components/ListOfPhotoCard'
import { Context } from '../Context'

const GET_PHOTOS = gql`query getPhotos ($categoryId: ID) {
  photos (categoryId: $categoryId) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}`

const renderProp = ({loading, error, data}) => {
  const { setLoadingPhotos } = useContext(Context)
  loading ? setLoadingPhotos(loading) : setTimeout(() => { setLoadingPhotos(loading) }, 5000);

  if (error) return <p>Error!</p>
  return <ListOfPhotoCardComponent data={data} />
}

export const PhotosWithQuery = ({categoryId = null}) => (

  <Query query={GET_PHOTOS} variables={{categoryId}}>
    {renderProp}
  </Query>
)