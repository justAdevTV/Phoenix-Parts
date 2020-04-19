import { gql } from 'apollo-server'

const typeDefs = gql`
  extend type Query {
    getMaterials: [Material]!
  }

  input MaterialInput {
    name: String!
  }

  type AddMaterialReturnType {
    material: Material
  }
  extend type Mutation {
    addMaterial(MaterialInput: MaterialInput) : AddMaterialReturnType
  }

  type Material {
    name: String!
  }
`

export default typeDefs
