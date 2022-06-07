import { TextField } from "@mui/material"
import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { useGlobalContext } from "./Context"

export const SearchForm=()=>{
    const {query,setQuery,error} = useGlobalContext()

    return(
        <Box component="form" noValidate autoComplete="off">
            <Typography variant="h2" spacing={2}>
                Search Movies
            </Typography>
            <TextField label="Search field" type="search" variant="filled" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        {error.show && <Typography variant="body1">{error.msg}</Typography>}
        </Box>
    )
}