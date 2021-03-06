// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type Book = {
  id: number
  title: string
  author: string
  description: string
  topic: string
  cover: string
  downloadUrl: string
  redirectUrl: string
}

export type DataSetItemType = {
  type: string
  path: string
  version: string
}


export type DataSetItem = {
  id: number
  title: string
  author: string
  description: string
  source: string
  path: string
  formats: Array<DataSetItemType>
  topics: Array<string>
  cover: string
}
