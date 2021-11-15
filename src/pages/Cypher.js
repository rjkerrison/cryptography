import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import CryptographyForm from '../components/CryptographyForm'
import { cyphers } from '../helpers'

const Cypher = () => {
  const params = useParams()
  const navigate = useNavigate()

  console.log({ params })
  console.log({ cyphers })

  const { slug } = params
  const [state, setState] = useState({
    title: 'FUCK',
    cypherProps: {
      initialState: { shift: 'NOPE' },
      algorithm: { decrypt: () => {}, encrypt: () => {} },
    },
  })

  useEffect(() => {
    console.log({ cypher: cyphers[slug] })
    if (!cyphers[slug]) {
      console.log({ cyphers })
      console.log('redirecting')
      navigate('/')
      return
    }

    const { title, ...cypherProps } = cyphers[slug]
    console.log({ title, cypherProps })
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
