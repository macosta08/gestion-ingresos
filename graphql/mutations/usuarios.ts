import { gql } from '@apollo/client';

const UPDATE_USUARIO = gql`
  mutation Mutation($data: UserUpdateInput, $where: UserWhereUniqueInput!) {
    updateUsuario(data: $data, where: $where) {
      id
    }
  }
`;

const CREATE_USUARIO = gql`
  mutation CreateUser($data: UserCreateInput) {
    createUser(data: $data) {
      account {
        id
      }
    }
  }
`;

export { UPDATE_USUARIO, CREATE_USUARIO };