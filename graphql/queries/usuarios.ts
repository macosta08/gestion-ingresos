import { gql } from '@apollo/client';

const GET_USER = gql`
  query Query {
    usuario {
      id
      name
      lastName
      email
      telefono
      rol {
        id
        name
      }
    }
  }
`;

const GET_ALL_USERS = gql`
  query usuarios($roles: [Enum_RoleName]) {
    usuarios(roles: $roles) {
     id
      name
      lastName
      email
      telefono
      rol {
        id
        name
      }
    }
  }
`;


export { GET_ALL_USERS,  GET_USER };