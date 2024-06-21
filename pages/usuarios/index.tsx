import React from 'react';
import TextPrimary from '@/components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@/components/ui/button';
import {  UsuariosProps } from '@/types';
import PaginationComponent from '@/components/AtomicDesign/Molecules/PaginationComponent';
import TableUsuarios from '@/components/AtomicDesign/Molecules/TableUsuarios';
import router from 'next/router';

function Usuarios() {
  // Ejemplo de datos de prueba
const data: UsuariosProps[] = [
  {
    id:'1',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  
  },
  {
    id:'2',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  },
  {
    id:'3',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  },
  {
    id:'4',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  },
  {
    id:'5',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  },
  {
    id:'6',
    name: 'Liam ',
    lastName: 'Johnson',
    email: 'Fulfilled@gmail.com',
    telefono: '5135464321',
  },
];
  return (
    <div className="flex flex-col p-4 px-10 gap-8 items-center h-screen">
      <div className='w-full justify-between flex'>
        <TextPrimary text="Usuarios" />
        <Button onClick={() => router.push(`/usuarios/nuevo`)}>Nuevo usuario</Button>
      </div>
      <TableUsuarios data={data}/>
      <PaginationComponent/>
    </div>
  );
}

export default Usuarios;
