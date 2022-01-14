import React, { useContext } from 'react'
import { PhotoCard } from '../components/PhotoCard'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Status } from '../components/Status'
import { Context } from '../Context'
import { defaultPhoto } from '../util/defaultValues'

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id:$id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`
const renderProp =  ({loading, error, data}) => {
  const { setLoadingPhotos } = useContext(Context)
  loading ? setLoadingPhotos(loading) : setTimeout(() => { setLoadingPhotos(loading) }, 5000);
 
  if (error) return <Status state="error"/>
  
  const photo = loading ? defaultPhoto : data['photo']
  return (<PhotoCard {...photo}/>)
}

export const PhotoCardWithQuery = ({id}) => (
  <Query query={GET_SINGLE_PHOTO} variables={{id}}>
    {
     renderProp
    }
  </Query>
)