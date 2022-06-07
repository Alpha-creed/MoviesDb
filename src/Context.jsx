import { useState } from "react"
import { useContext } from "react"
import React from "react"
import { useFetch } from "./useFetch"

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
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