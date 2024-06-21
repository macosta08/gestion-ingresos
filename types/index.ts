export type LinkItem = {
    name: string;
    link: string;
    icon: React.ReactNode;
  }

  export type LinkItemCard = {
    name: string;
    link: string;
    icon: React.ReactNode;
    description: string
  }

  export interface IngresosEgresosProps {
    id: string;
    usuario: string;
    concepto: string;
    fecha: string;
    monto: string;
}

export interface UsuariosProps {
  id: string;
    name: string;
    lastName: string;
    email: string;
    telefono: string;
}