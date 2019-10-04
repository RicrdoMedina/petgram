import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { ListOfFavs } from '../components/ListOfFavs'
import { defaultFavs } from '../util/defaultValues'

const GET_FAVS = gql`
  query getFavs {
    favs{
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const renderProp = ({loading, error, data = []}) => {
  
  const favs = typeof data === 'undefined' ? [] : !loading ? data['favs'] : defaultFavs

  return <ListOfFavs favs={favs} loading={loading} error={error}/>
}

export const FavsWithQuery = () => (
  <Query query={GET_FAVS} fetchPolicy='network-only'>
    {renderProp}
  </Query>
)