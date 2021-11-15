import caesar from './caesar'
import polyalphabetic from './polyalphabetic'
import polybius from './polybius'
import { Cyphers } from './types'

const cyphers: Cyphers = {
  caesar: {
    title: 'Caesar',
    algorithm: caesar,
    initialState: {
      shift: 1,
      decrypted: 'alea jacta est',
    },
    stateLabels: {
      shift: 'Shift characters by',
    },
  },
  polyalpha: {
    title: 'Polyalphabetic',
    algorithm: polyalphabetic,
    initialState: {
      shiftString: 'snake',
      decrypted: 'it belongs in a museum',
    },
    stateLabels: {
      shiftString: 'Shift characters according to',
    },
  },
  polybius: {
    title: 'Polybius',
    algorithm: polybius,
    initialState: {
      delimiter: '.',
      decrypted: 'hello there',
    },
    stateLabels: {
      delimiter: 'Separator between coordinates',
    },
  },
}

export { cyphers }
