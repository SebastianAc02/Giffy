

import { useCallback } from "react";
import { Helmet } from "react-helmet";
import { Link, useLocation } from "wouter";
import ListGifs from "../components/ListGifs";
import TrendingSearches from "../components/trendingSearches";
import { GifHook } from "../hooks/GifHook";

import SearchForm from "./SearchForm";


export default function Home(){
   
   // eslint-disable-next-line no-unused-vars
   const [path, pushLocation]  =  useLocation()

   // eslint-disable-next-line no-unused-vars
   const {loading, gifos} =    GifHook()
   
    const  evsubmit = useCallback(  ({keyword}) => {


       pushLocation(`/search/${keyword}`)
      
    }, [pushLocation])

    

   //     useTitle({title: '|GIFS'})

    return (
        <div>
            <Helmet>
                <title> Home | Giffy </title>
            </Helmet>
     
      
      <Link to='/search/colombia'> Gifs de colombia</Link>

       <SearchForm onSubmit={evsubmit} />
       
        <ListGifs gifs= {gifos} />
           
        <TrendingSearches />

            </div> 
    );
}