import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Layout } from '../components/Layout'
import { Avatar } from '../components/Avatar'
import { Form } from '../components/Form'
import { useLocalStorage } from '../hooks/useLocalStore'
import { templateProfile } from '../util/forms'

export default () => {
  const { removeAuth } = useContext(Context)
  const [name, setName] = useLocalStorage('nameAndLastname', true)
  const [email, setEmail] = useLocalStorage('email', true)
 
  return <Layout title='Mis datos' hiddenTitle={true}>
      <Avatar/>
      <Form disebled={true} inputs={templateProfile(name,email)} title='Mis datos' onSubmit={removeAuth} submitTitle='Cerrar sesión'/>
    </Layout>
}