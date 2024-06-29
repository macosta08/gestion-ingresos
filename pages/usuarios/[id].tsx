import React, { useState } from 'react';
import TextSecundary from '@/components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/AtomicDesign/Atoms/TextInput';
import { useQuery } from '@apollo/client';
import { GET_USER } from '@/graphql/queries/usuarios';
 import { useRouter } from 'next/router';
import { useFormikUsuario } from '@/hooks/usuarios/useFormikUsuario';
import { GET_ROLES } from '@/graphql/queries/roles';

function UsuarioId() {
   const router = useRouter();
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
  const { data: dataRoles } = useQuery(GET_ROLES, {
    fetchPolicy: 'cache-and-network',
  });

  // aqui hay que pasar la data que venga del query
  const data = {
    id: undefined,
      name: undefined,
      lastName: undefined,
      email: undefined,
      telefono: undefined,
      rol: {
        id: undefined,
        name: undefined
      }
  }
  const {formik, handleMutation} = useFormikUsuario({data})
  console.log('data :>> ', data);
  console.log('formik :>> ', formik);
  return (
    <div className="flex flex-col p-4 gap-8 items-center h-screen">
      <section className="w-full max-w-4xl p-6 mx-auto bg-purple-200 rounded-md shadow-md dark:bg-gray-800">
        <TextSecundary text= {router.query.id === 'nuevo' ? 'Nuevo usuario' : 'Editar usuario'}  />
        <form onSubmit={formik.handleSubmit} className="mt-4 space-y-6">
          <TextInput
            label="Nombre"
            type="text"
            placeholder="Ingrese el nombre"
            name='name'
            value={data?.name}
            onChange={formik.handleChange}
            
          />
          <TextInput
           name='lastName'
            label="Apellido"
            type="text"
            placeholder="Ingrese el apellido"
            value={data?.lastName}
            onChange={formik.handleChange}
          />
           <TextInput
            name='email'
            label="Correo"
            type="email"
            placeholder="Ingrese el correo electronico"
            value={data?.email}
            onChange={formik.handleChange}
          />
          <TextInput
           name='telefono'
            label="Telefono"
            type="tel"
            placeholder="Ingrese el telefono"
            value={data?.telefono}
            onChange={formik.handleChange}
          />

          <div className='bg-white shadow-md  rounded-md flex flex-col gap-3 p-2 w-[300px]'> 
            <span className='font-medium'>Selecciona un rol</span>
            <div  className='gap-4 flex'>
              {
                dataRoles && dataRoles?.roles?.map((role: {id: string, name: string})=>(
                  <TextInput
                    name={role?.name}
                    label={role?.name}
                    type="radio"
                    checked={data?.rol?.name === role?.name}
                    onChange={() => {
                        formik.setFieldValue('rol', role?.id);
                    }}
               />
                ))
              }

        </div>
        </div>
         
          <div className="flex justify-end">
          <Button 
          onClick={() => handleMutation()}
            >Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default UsuarioId;
