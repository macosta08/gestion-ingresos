import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { UsuariosProps } from '@/types';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

const TableUsuarios = ({ data }: { data: UsuariosProps[] }) => {
  const router = useRouter();

  const headers = [
    'Nombre', 'Correo', 'Telefono', 'Acciones'
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <Table>
        <TableHeader>
          <TableRow >
            {headers.map((header, index) => (
              <TableHead
                key={index}
                className='bg-purple-300 text-black table-cell'  
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
      </Table>
      <div className="max-h-[490px] overflow-y-auto">
        <Table>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={item?.id}
                className={index % 2 === 0 ? 'bg-accent' : ''}
              >
                <TableCell className="table-cell">
                  {`${item?.name} ${item?.lastName}`}
                </TableCell>
                <TableCell className="table-cell">
                  {item?.email}
                </TableCell>
                <TableCell className="table-cell">
                  {item?.telefono}
                </TableCell>
                <TableCell className="table-cell">
                  <Button onClick={() => router.push(`/usuarios/${item?.id}`)}>Editar</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TableUsuarios;