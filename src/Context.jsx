import { useState } from "react"
import { useContext } from "react"
import React from "react"
import { useFetch } from "./useFetch"

export const API_ENDPOINT = `https://movie-details1.p.rapidapi.com/imdb_api/movie?id=tt1375666/?apikey=${"403a98f995msh69d70d1df3af39dp152b7ajsnbbe248602459"}`
export const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [query,setQuery] = useState("batman")
    const {isLoading,error,data:movies} = useFetch(`s=${query}`)

    return(
        <AppContext.Provider value={{isLoading,error,movies,query,setQuery}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}