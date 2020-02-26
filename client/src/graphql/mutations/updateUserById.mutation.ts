import gql from 'graphql-tag'

export default gql`
    mutation updateUserById($id: Int!, $UserPatch: UserPatch!) {
        updateUserById(input: { id: $id, userPatch: $UserPatch }) {
            clientMutationId
        }
    }
`
