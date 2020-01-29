import gql from 'graphql-tag'

export default gql`
  query getUsers {
    allUsers {
      nodes {
        email
        id
        name
        createdAt
      }
    }
  }
`
