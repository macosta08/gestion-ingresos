import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useMemo } from 'react';
import { FormikProps, UsuariosProps } from '@/types';
// import { useMutation } from '@apollo/client';
// import { CREATE_USUARIO, UPDATE_USUARIO } from '@/graphql/mutations/usuarios';
import { useRouter } from 'next/router';
// import { GET_ALL_USERS } from '@/graphql/queries/usuarios';

const useFormikUsuario = ({ data }: {data: UsuariosProps}) => {
const router = useRouter();
  const initialValues = useMemo(
    () => ({
    name: data?.name || '',
    lastName: data?.lastName || '',
    email: data?.email || '',
    telefono: data?.telefono || '',
    rol: data?.rol?.name || '',
    }),
    [data]
  );

  const validationSchema = Yup.object({
    name: Yup.string().required('Campo requerido'),
    lastName: Yup.string().required('Campo requerido'),
    email: Yup.string().required('Campo requerido'),
    telefono: Yup.string().required('Campo requerido'),
    rol: Yup.string().required('Campo requerido'),
  });

  const formik: FormikProps = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
    },
    enableReinitialize: true,
  });

  const { values } = formik;
  console.log(values)
//   const [createUsuarioMutation] = useMutation(CREATE_USUARIO, {
//     onCompleted: () => {
//       toast.success('Referencia creado exitosamente');
//     },
//     onError: () => {
//       toast.error(
//         'No se ha podido crear el referencia, comuníquese con soporte.'
//       );
//     },
//   });
//   const [updateUsuarioMutation] = useMutation(UPDATE_USUARIO, {
//     onCompleted: () => {
//       toast.success('Referencia creado exitosamente');
//     },
//     onError: () => {
//       toast.error(
//         'No se ha podido crear el referencia, comuníquese con soporte.'
//       );
//     },
//   });

  const handleMutation = async () => {
    // if(router?.query?.id){
    //     await updateUsuarioMutation({
    //         variables: {
    //           where: {
    //             id: router?.query?.id,
    //           },
    //           data: {
    //             nombre: values?.nombre,
    //             name: values?.name,
    // lastName: values?.lastName,
    // email: values?.email,
    // telefono: values?.telefono,
    // rol: values?.rol,
    //           },
    //         },
    //         refetchQueries: [GET_ALL_USERS],
    //       });
    // }else {
    //     await createUsuarioMutation({
    //         variables: {
    //           where: {
    //             id: '',
    //           },
    //           data: {
    //             nombre: values?.nombre,
    //             name: values?.name,
    // lastName: values?.lastName,
    // email: values?.email,
    // telefono: values?.telefono,
    // rol: values?.rol,
    //           },
    //         },
    //         refetchQueries: [GET_ALL_USERS],
    //       });
    // }
   
  };

  return {
    formik,
    handleMutation,
  };
};

export { useFormikUsuario };