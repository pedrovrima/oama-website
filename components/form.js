import { useState } from "react";
import * as EmailValidator from 'email-validator';

const isEmpty = (value) => {
  return (value?true:false);
};

const Form = () => {
  const [formState, setFormState] = useState({
    email: {
      value: "",
      valid: true,
      name:"Email",
      check: (value)=>isEmpty(value) && EmailValidator.validate(value),
    },
    title: {
        value: "",
        valid: true,
        check: isEmpty,
        name:"Título"
      },
      
    message: {
        value: "",
        valid: true,
        check: isEmpty,
        name:"Mensagem"
      },
  });


const setValid = (name, value) =>{
    return setFormState({...formState,[name]:{
        ...formState[name],valid:value
    }})
}


const setValue = (name, value) =>{
    return setFormState({...formState,[name]:{
        ...formState[name],value:value
    }})
}


const isValid = (name)=>{
    return(formState[name].check(formState[name].value))
}


const checkValid = (name)=>{
    return formState[name].valid
}




  return (
    <div className="mt-24 flex flex-col items-center w-full mb-36">
      <div className="m-6 flex flex-col w-3/5 justify-start items-start">
        <p className="text-gray-900">Email</p>
        <input
            onBlur={()=> setValid("email",isValid("email"))}
            onFocus={()=> setValid("email",true)}
            onChange={(e)=> setValue("email", e.target.value)}

            type="input"

          placeholder="exemplo@email.com.br"
          className={` bg-yellow-600 w-full text-xl border-b ${checkValid("email")? "border-black":"border-red-700"} mt-4 border-black placeholder-gray-100 text-gray-900`}
        ></input>
        <p className=
        {`${checkValid("email")?"hidden":""}  text-red-700`} >Email inválido</p>
      </div>

      <div className="flex m-6 flex-col w-3/5 justify-start items-start">
        <p className="text-gray-900">Título</p>
        <input
                    onBlur={()=> setValid("title",isValid("title"))}
                    onFocus={()=> setValid("title",true)}
                    onChange={(e)=> setValue("title", e.target.value)}
        
                    placeholder="Olá"
          type="input"
          className={` bg-yellow-600 w-full text-xl border-b ${checkValid("title")? "border-black":"border-red-700"} mt-4  placeholder-gray-100 text-gray-900`}
        ></input>
        
                <p className=
        {`${checkValid("title")?"hidden":""}  text-red-700`} >Título inválido</p>

      </div>

      <div className="flex m-6 flex-col w-3/5 justify-start items-start">
        <p className="text-gray-900">Mensagem</p>
        <textarea
                            onBlur={()=> setValid("message",isValid("message"))}
                            onFocus={()=> setValid("message",true)}
                            onChange={(e)=> setValue("message", e.target.value)}
                
          type="text-area"
          rows="6"
          className={` bg-yellow-600 mt-4 w-full text-xl border-l px-2 border-b  ${checkValid("message")? "border-black":"border-red-700"}  text-gray-900`}
        ></textarea>
         <p className=
        {`${checkValid("message")?"hidden":""}  text-red-700`} >Mensagem inválido</p>

      </div>
   <button className="border-2 border-solid  border-yellow-50 font-semibold  rounded-3xl bg-yellow-50 text-yellow-600 shadow-xl py-2 px-4">Enviar</button>
    </div>
    
  );
};

export default Form;
