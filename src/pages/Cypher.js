import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CryptographyForm from '../components/CryptographyForm'
import { cyphers } from '../helpers'

const Cypher = () => {
  const params = useParams()
  const navigate = useNavigate()

  const { slug } = params
  const [state, setState] = useState({})

  useEffect(() => {
    if (!cyphers[slug]) {
      navigate('/')
      return
    }

    const { title, ...cypherProps } = cyphers[slug]
    setState({ title, cypherProps })
  }, [slug])

  return (
    <>
      <h2>{state.title}</h2>
      <CryptographyForm {...state.cypherProps} />
    </>
  )
}

export default Cypher
