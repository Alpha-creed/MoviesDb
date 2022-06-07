import { useFetch } from "./useFetch"
import {useParams} from 'react-router-dom'
import {Typography,Box} from '@mui/material'
import { Button } from "@mui/material"
import { Link } from "@mui/material"

export const SingleMovie = ()=>{
    const {id} = useParams()
    const {isLoading,error,data:movie} = useFetch(`&i=${id}`)

    if(isLoading){
        return <Typography >Loading.....</Typography>
    }
    if(error.show){
        return (
            <Box>
                <Typography variant="h1">
                    {error.msg}
                </Typography>
                <Link href="Home" >
                <Button>
                    Back to movies    
                </Button>    
                </Link>
            </Box>
        )
    }

    const { Poster: poster, Title: title, Plot: plot, Year: year } = movie   
     return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={poster} alt={title}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h2">
                    {title}
                </Typography>
                <Typography variant="body">
                    {plot}
                </Typography>
                <Typography variant="h4">
                    {year}
                </Typography>
                <Link href="/">
                    <Button>
                        Back to movies
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}