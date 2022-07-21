


import { useContext, useEffect, useState } from "react"
import  GifsContextProvider  from "../context/GifContext"
import getGifs from "../services/getGifs"

export  function GifHook({keyword} = {keyword: null} ){


    const[loading, setLoading] = useState(false)
    
    const {gifos, setGifs} = useContext(GifsContextProvider)

    // const [gifos, setGifs] = useState([])
 
    const keywordTouse =  keyword? keyword:  localStorage.getItem('lastkeyword')



// Paginacion : 
    const INITIAL_PAGE = 0


    const [loadingpage, setloadingpage] = useState(false)

    const [page, setPage ] = useState(0)
    
    useEffect(()=>{

       getGifs({ keywordTouse, page})
        .then((gifs) =>   {
            setLoading(true)
 
            setGifs(gifs)

            setLoading(false)
             localStorage.setItem('lastkeyword', keyword)
        })

    },[keyword, keywordTouse, setGifs, loadingpage, page])

    

      
        
useEffect(()=>{

    if(page === INITIAL_PAGE)
    {
        return
    }
    else{

       
    setloadingpage(true)

   
    getGifs({keyword: keywordTouse, page: page})
    .then((nextGifs)=> {
        setGifs(gifos => gifos.concat(nextGifs))
        setloadingpage(false)
    })
}
    
}, [page, keywordTouse, setGifs, setloadingpage] )


        
  

       
        
        return {loading, gifos, setPage};



    

}