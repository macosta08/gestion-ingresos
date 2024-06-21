import React from 'react';
import TextPrimary from '@/components/AtomicDesign/Atoms/TextPrimary';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/AtomicDesign/Atoms/TextInput';
import TableIngresosEgresos from '@/components/AtomicDesign/Molecules/TableIngresosEgresos';
import { IngresosEgresosProps } from '@/types';
import PaginationComponent from '@/components/AtomicDesign/Molecules/PaginationComponent';
import router from 'next/router';

function IngresosEgresos() {
  // Ejemplo de datos de prueba
const data: IngresosEgresosProps[] = [
  {
    id:'1',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
  {
    id:'2',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
  {
    id:'3',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
  {
    id:'4',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
  {
    id:'5',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
  {
    id:'6',
    usuario: 'Liam Johnson',
    concepto: 'Fulfilled',
    fecha: '2023-06-23',
    monto: '$250.00',
  },
];
  return (
    <div className="flex flex-col p-4 gap-8 items-center h-screen">
      <div className='w-full justify-between flex'>
      <TextPrimary text="Ingresos y egresos" />
        <Button onClick={() => router.push(`/ingresos-egresos/nuevo`)}>Nuevo</Button>
      </div>
      <TableIngresosEgresos data={data}/>
      <PaginationComponent/>
    </div>
  );
}

export default IngresosEgresos;
