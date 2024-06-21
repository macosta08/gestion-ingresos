import React from 'react';
import TextSecundary from '@/components/AtomicDesign/Atoms/TextSecundary';
import { Button } from '@/components/ui/button';
import TextInput from '@/components/AtomicDesign/Atoms/TextInput';

function IngresosEgresosId() {
  return (
    <div className="flex flex-col p-4 gap-8 items-center h-screen">
      <TextSecundary text="Formulario" />
      <section className="w-full max-w-4xl p-6 mx-auto bg-purple-200 rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
         Nuevo usuario
        </h2>
        <form className="mt-4 space-y-6">
          <TextInput
            label="Nombre"
            type="text"
            placeholder="Ingrese el nombre"
          />
          <TextInput
            label="Apellido"
            type="text"
            placeholder="Ingrese el apellido"
          />
           <TextInput
            label="Correo"
            type="email"
            placeholder="Ingrese el correo electronico"
          />
          <TextInput
            label="Telefono"
            type="tel"
            placeholder="Ingrese el telefono"
          />
         
          <div className="flex justify-end">
          <Button>Guardar</Button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default IngresosEgresosId;
