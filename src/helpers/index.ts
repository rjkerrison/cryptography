import caesar from './caesar'
import polyalphabetic from './polyalphabetic'
import polybius from './polybius'
import { Cyphers } from './types'

const cyphers: Cyphers = {
  caesar,
  polyalpha: polyalphabetic,
  polybius,
}

export { cyphers }
