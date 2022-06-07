import { useEffect } from "react"
import { useState } from "react"

const API_ENDPOINT = `https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666/?apikey=${"403a98f995msh69d70d1df3af39dp152b7ajsnbbe248602459"}`

export const useFetch = (urlParams) =>{
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState({show:false,msg:""})
    const [data,setData] = useState(null)
    const fetchMovies = async (url) =>{
        setIsLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            if(data.response === "True"){
                setData(data.Search || data)
                setError({show:false,msg:''})
            }else{
                setError({show:true,msg:data.Error})
            }
            setIsLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchMovies(`${API_ENDPOINT}${urlParams}`)
    },[urlParams])
    return {isLoading,error,data}

}