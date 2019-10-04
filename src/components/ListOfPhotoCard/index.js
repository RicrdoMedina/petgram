import React from 'react'
import {PhotoCard} from '../PhotoCard'
import { Section } from './styles'

export const ListOfPhotoCardComponent = ({ data: { photos = [] }} = {}) => {
  return (
    <Section>
      {
        photos.map(photo => <PhotoCard key={photo.id} {...photo}/>)
      }
    </Section>
  )
}
