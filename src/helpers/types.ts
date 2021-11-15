interface CypherAlgorithm<T> {
  decrypt: CypherFunction<T>
  encrypt: CypherFunction<T>
}

type CypherFunction<T> = (value: string, config: T) => string

interface CypherInfo<T> {
  title: string
  algorithm: CypherAlgorithm<T>
  initialState: T & { decrypted: string }
  stateLabels: { [key: string]: string }
}

interface Cyphers {
  [key: string]: CypherInfo<any>
}

export type { CypherAlgorithm, Cyphers, CypherInfo, CypherFunction }
