import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { IngresosEgresosProps } from '@/types';



const TableIngresosEgresos = ({data}: {data: IngresosEgresosProps[]}) => {
  // Obtén las claves de la primera fila para generar la cabecera dinámicamente
  const headers = [
   'Concepto', 'Monto', 'Fecha', 'Usuario'
  ]

  return (
    <div className="relative overflow-hidden w-full">
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header, index) => (
            <TableHead
              key={index} // Usa un key único para cada TableHead
              className='bg-purple-300 text-black table-cell'  
            >
              {header.charAt(0).toUpperCase() + header.slice(1)} {/* Capitaliza la primera letra */}
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
            key={item?.id} // Usa un key único para cada TableRow
            className={index % 2 === 0 ? 'bg-accent' : ''} // Alterna los colores de fondo de las filas
          >
             <TableCell className="table-cell">
                          {item?.concepto}
                          </TableCell>
                          <TableCell className="table-cell">
                          {item?.monto}
                          </TableCell>
                          <TableCell className="table-cell">
                          {item?.fecha}
                          </TableCell>
                          <TableCell className="table-cell">
                          {item?.usuario}
                          </TableCell>
           
          </TableRow>
       ))}
       </TableBody>
     </Table>
   </div>
 </div>
  );
};

export default TableIngresosEgresos;