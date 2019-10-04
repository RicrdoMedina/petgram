import React, { Fragment, useEffect, useState } from 'react'
import { Category } from '../Category'

import { ContainerList, List, Item } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-api-ricrdomedina.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        console.log("response", response)
        setLoading(false)
      })
  }, [])

  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => (
    <ContainerList fixed={fixed}>
      <List>
        {
          categories.map(category => <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`}/>
          </Item>)
        }
      </List>
    </ContainerList>
  )
      if (loading) return 'Cargando...'
  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)