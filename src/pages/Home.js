import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
// import { ListOfPhotoCard } from '../container/ListOfPhotoCard'
import { PhotosWithQuery } from '../container/GetPhotos'
import { Layout } from '../components/Layout'

const HomePage = ({id}) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Aquí encontraras fotos de animales domésticos'>
      <ListOfCategories/>
      <PhotosWithQuery categoryId={id}/>
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
