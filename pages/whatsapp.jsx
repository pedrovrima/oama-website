
import React, { useEffect } from "react";
import Router from 'next/router'

export default function WhatsApp(){
useEffect(() => {
   const {pathname} = Router
   Router.push('https://api.whatsapp.com/send?phone=5524999627394')

 });

return(<div>"Aguarde"</div>)
}
