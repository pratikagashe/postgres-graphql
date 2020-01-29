import React from 'react'
import client from '../ApolloClient'
import gql from 'graphql-tag'

const Users: React.FC = () => {
  const getUsers = () => {
    client
      .query({
        query: gql`
          {
            allUsers {
              nodes {
                email
                id
                name
                createdAt
              }
            }
          }
        `,
      })
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <h2>
      Users <button onClick={getUsers}>Get users</button>
    </h2>
  )
}

export default Users
