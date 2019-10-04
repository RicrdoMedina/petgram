import {useEffect, useState, useRef} from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    console.log(element.current)
  
    Promise.resolve(  // Cargar solo cuando el navagador no lo soporta
      typeof window.IntersectionObserver === 'undefined'
    ? import('intersection-observer')
    : window.IntersectionObserver
    )
    .then(() => {
      const observer = new window.IntersectionObserver(function (entries) {// Recibe todas las entras que estan en el viewport y que esta obsevando
        console.log(entries)
        const { isIntersecting } = entries[0] // isIntersecting nos indica si esta en el viewport del usuario
        console.log({isIntersecting})
        if (isIntersecting) {
          console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)// invocar el observer y le pasamos el elemento q desea observar
    })
  }, [element]) //Ejecutar solo cuando cambie la referencia

  return [show, element]
}
