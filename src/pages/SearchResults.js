

import throttle from "just-throttle";
import { useCallback, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import ListGifs from "../components/ListGifs";

import {GifHook} from "../hooks/GifHook";
import useNearScreen from "../hooks/isNearscreen";



export default function SearchResults({params}){


    const {keyword}= params

  

    const {loading, gifos, setPage} = GifHook({keyword})

    // Infinite scroll

    const externalRef = useRef()

    
   

    const {show } = useNearScreen({externalRef : loading? null: externalRef,
    once:false})

const title = gifos? `Results of ${keyword}`: ""
    // useTitle({title})

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextpage = useCallback( throttle(
        () =>setPage(prevPage => prevPage+ 1)
        , 200
    ), [setPage])

    



    // change debounce to turtle 

    useEffect(()=>{

    //console.log(show)
        if(show) debounceHandleNextpage();
    } , [show, debounceHandleNextpage])

 




    return (
        <div>
          
            {loading?
            <h1>Loading from search results</h1>
        :
       <>
         <Helmet>
                <title> {title}  | Giffy </title>
                <meta name="description" content={title} />
            </Helmet>
       <h1> {params.keyword} </h1>
       <ListGifs gifs={gifos} />
       <div id="visor" ref={externalRef}></div>
       </>   
         }

             
      
        </div>
    );
}