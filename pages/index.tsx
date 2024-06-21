import TextPrimary from "@/components/AtomicDesign/Atoms/TextPrimary"
import CardComponent from "@/components/AtomicDesign/Molecules/CardComponent"
import { PrivateComponent } from "@/components/RBAC/PrivateComponent"
import {  linksCards } from "@/utils/links"
// import { useSession } from 'next-auth/react';

 function Inicio() {
  // const { data: session } = useSession();
  // console.log(session)
  return (
        <div className="flex flex-col p-4 gap-32 items-center h-screen">
            <TextPrimary text='Bienvenido, nombre usuario' />
           <div className="flex gap-4">
           {linksCards.map((link) => 
 (
  // <PrivateComponent roleList={[]} userRole={undefined} children={undefined}>
            <CardComponent key={link.link} info={link}/>
            // </PrivateComponent>
          )
        )}
           </div>
        </div>
  )
}

export default Inicio