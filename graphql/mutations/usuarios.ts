import { gql } from '@apollo/client';

const UPDATE_USUARIO = gql`
  mutation Mutation($data: UserUpdateInput, $where: UserWhereUniqueInput!) {
    updateUsuario(data: $data, where: $where) {
      id
    }
  }
`;

const CREATE_USUARIO = gql`
  mutation DeleteUser($userId: String!) {
    deleteUser(userId: $userId) {
      id
    }
  }
`;

export { UPDATE_USUARIO, CREATE_USUARIO };