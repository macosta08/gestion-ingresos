import React, { useState } from 'react';
import TextSecundary from '@/components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/AtomicDesign/Atoms/TextInput';
// import { useQuery } from '@apollo/client';
// import { GET_USER } from '@/graphql/queries/usuarios';
 import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_USUARIO, UPDATE_USUARIO } from '@/graphql/mutations/usuarios';
import { GET_ALL_USERS } from '@/graphql/queries/usuarios';

interface UsuarioMutationProps {
  id: string  | undefined;
    name: string  | undefined;
    lastName: string  | undefined;
    email: string  | undefined;
    telefono: string  | undefined;
    rol: string | undefined;
}

function IngresosEgresosId() {
   const router = useRouter();
   const [data, setData] = useState<UsuarioMutationProps>({
    id: undefined,
      name: undefined,
      lastName: undefined,
      email: undefined,
      telefono: undefined,
      rol: undefined,
  })
   console.log(data)
  // const { data: dataQuery } = useQuery(GET_USER, {
  //  variables: {
  //   id: router.query.id as string
  //  },
  //   onCompleted: (data) => {
  //     if (data?.usuario) {
  //       const usuario = data?.usuario
  //       setData({
  //         id: usuario.id,
  //         name: usuario.name,
  //         lastName: usuario.lastName,
  //         email: usuario.email,
  //         telefono: usuario.telefono,
  //         rol: usuario.rol,
  //       });
  //     }
  //   },
  //   fetchPolicy: 'cache-and-network',
  // });
  // const [createMutation] = useMutation(CREATE_USUARIO);
  // const [updateMutation] = useMutation(UPDATE_USUARIO);
  // const handleMutation = async () => {

  //   if(router.query.id === 'nuevo'){
  //     await createMutation({
  //       variables: {
  //         where: { id },
  //         data: { visto: true },
  //       },
  //       refetchQueries: [GET_ALL_USERS],
  //     });
  //   }else {
  //     await updateMutation({
  //       variables: {
  //         where: { id },
  //         data: { visto: true },
  //       },
  //       refetchQueries: [GET_ALL_USERS],
  //     });
  //   }
   
  // };
  return (
    <div className="flex flex-col p-4 gap-8 items-center h-screen">
      <section className="w-full max-w-4xl p-6 mx-auto bg-purple-200 rounded-md shadow-md dark:bg-gray-800">
        <TextSecundary text= {router.query.id === 'nuevo' ? 'Nuevo usuario' : 'Editar usuario'}  />
        <form className="mt-4 space-y-6">
          <TextInput
            label="Nombre"
            type="text"
            placeholder="Ingrese el nombre"
            value={data?.name}
            onChange={( e: React.ChangeEvent<HTMLInputElement>) => setData({...data, name: e.target.value})}
            
          />
          <TextInput
            label="Apellido"
            type="text"
            placeholder="Ingrese el apellido"
            value={data?.lastName}
            onChange={(e) => setData({...data, lastName: e.target.value})}
          />
           <TextInput
            label="Correo"
            type="email"
            placeholder="Ingrese el correo electronico"
            value={data?.email}
            onChange={(e) => setData({...data, email: e.target.value})}
          />
          <TextInput
            label="Telefono"
            type="tel"
            placeholder="Ingrese el telefono"
            value={data?.telefono}
            onChange={(e) => setData({...data, telefono: e.target.value})}
          />

          <div className='bg-white shadow-md  rounded-md flex flex-col gap-3 p-2 w-[300px]'> 
            <span className='font-medium'>Selecciona un rol</span>
            <div  className='gap-4 flex'>
            <TextInput
            label="Administrador"
            type="radio"
            checked={data?.rol === "Administrador"}
            onChange={(e) => setData({...data, rol: e.target.value})}
          /> 
          <TextInput
          label="Usuario"
          type="radio"
          checked={data?.rol === "Usuario"}
          onChange={(e) => setData({...data, rol: e.target.value})}
         
        /></div></div>
         
          <div className="flex justify-end">
          <Button 
          // onClick={() => handleMutation()}
            >Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default IngresosEgresosId;
