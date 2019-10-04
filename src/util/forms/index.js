export const templateProfile = (name, email) => [
  {
    name: 'Nombres y Apellidos',
    value:name,
    required: false,
    type: 'text',
    disabled: true,
    placeholder: 'Nombres y Apellidos',
  },
  {
    name: 'Email',
    value:email,
    required: false,
    type: 'email',
    disabled: true,
    placeholder: 'Email',
  },
]

export const templateRegister =  [
  {
   name: 'Nombres y Apellidos',
   value:'',
   required: true,
   type: 'text',
   disabled: false,
   placeholder: 'Nombres y Apellidos',
 },
 {
   name: 'Email',
   value:'',
   required: true,
   type: 'email',
   disabled: false,
   placeholder: 'Email',
 },
 {
   name: 'Passowrd',
   value:'',
   required: true,
   type: 'password',
   disabled: false,
   placeholder: 'Password',
 },
]

export const templateLogin = [
  {
    label: 'Email',
    name: 'Email',
    value:'',
    required: true,
    type: 'email',
    disabled: false,
    placeholder: 'Email',
  },
  {
    label: 'Password',
    name: 'Passowrd',
    value:'',
    required: true,
    type: 'password',
    disabled: false,
    placeholder: 'Password',
  },
]

