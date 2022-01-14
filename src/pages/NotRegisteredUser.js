import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { Header } from '../components/Header'
import { Form } from '../components/Form'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation, } from '../container/LoginMutation'
import { NoRegister } from '../components/NoRegister'
import { useLocalStorage } from '../hooks/useLocalStore'
import { templateRegister, templateLogin } from '../util/forms'

export default () => {
  const { activateAuth, showRegisterForm } = useContext(Context)
  const [name, setName] = useLocalStorage('nameAndLastname', false)
  const [email, setEmail] = useLocalStorage('email', false)

        return (<Fragment>
          <Header/>
          { showRegisterForm &&
          (<RegisterMutation>
            {
              (register, {data, loading, error}) => {
                const onSubmit = (inputs) => {
                  const email = inputs[1]['value']
                  const password = inputs[2]['value']
                  const nameAndLastname = inputs[0]['value']
                  const input = { email, password }
                  const variables = { input }
                  
                  register({ variables }).then(({data}) => {
                    const {signup} = data
                    setName(nameAndLastname)
                    setEmail(email)
                    activateAuth(signup)
                  })
                }

                const errorMsg = error && 'El usuario ya existe o hay algun problema.'

                return <Fragment>
                          <Form disebled={loading} inputs={templateRegister} errorMsg={errorMsg} title='Registrarme' onSubmit={onSubmit}/>
                          <NoRegister/>
                        </Fragment>
              }             
            }
          </RegisterMutation>)
          }
          { !showRegisterForm &&
          <LoginMutation>
            {
              (login, {data, loading, error}) => {

                const onSubmit = (inputs) => {
                  const input = { email: inputs[0]['value'], password: inputs[1]['value'] }
                  const variables = { input }
                  login({ variables }).then(({data}) => {
                    const {login} = data
                    activateAuth(login)
                  }).catch(error => {
                    console.error(error)
                  });
                }

                const errorMsg = error && 'El password no es correcto o el usuario no exite.'
                return <Fragment>
                          <Form disabled={loading} inputs={templateLogin} errorMsg={errorMsg} title='Iniciar sesión' onSubmit={onSubmit}/>
                          <NoRegister/>
                        </Fragment>
              }
            }
          </LoginMutation>
          }
        </Fragment>)
      }