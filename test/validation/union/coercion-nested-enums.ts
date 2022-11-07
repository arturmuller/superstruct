import { union, string, number, defaulted, object, enums } from '../../../src'

const A = string()
const B = object({ a: number(), b: defaulted(enums([1, 2, 3, 4, 5]), 5) })

export const Struct = union([A, B])

export const data = { a: 5 }

export const output = { a: 5, b: 5 }

export const create = true
