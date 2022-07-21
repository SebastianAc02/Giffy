
import { useState, useEffect } from "react"
import { Link } from "wouter"
import getTrending from "../pages/getTrendingService"





function TrendingSearches(){

    const [trending, setTrends] = useState([])

    useEffect(()=>{
        getTrending()
        .then(gifs => {
           
            setTrends(gifs)
        })
    }
    ,[])

  
    const trends = trending.slice(0,9)


  const listItems =   trends.map(singleGif =>{
        return(
            <li key={singleGif.id}>
            <Link to ={`/search/${singleGif.title}` }>
           
            <small > {singleGif.title} </small>
            
            </Link>
            </li>
        )
    })

  

    return (

        <div>
            <ul > {listItems } </ul>
        </div>


    );

}

export default TrendingSearches;