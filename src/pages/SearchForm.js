import React, { useCallback } from "react";
import { useState } from "react";




 function SearchForm({onSubmit }){
    const[keyword, setKeyword] = useState('panda')


   
    const  handleSubmit = (evt)=>{

        evt.preventDefault()

      onSubmit({keyword})
      


    }

    function handleChange(evt){

        setKeyword(evt.target.value)
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <button > Search  </button>
            <input placeholder="search here" onChange={handleChange}
            type="text">
            </input>
           </form>
           </>
    );

}

export default React.memo(SearchForm)

//use memo es para un valor podriamos usarlo dentro de la home  pero no en cualquier sitio si no  enla home

// independiente con react memo podemos tener que searhcform se guarda

// component de order superior y devuelve otro componente