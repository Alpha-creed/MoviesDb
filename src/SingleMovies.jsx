import { useFetch } from "./useFetch"
import {useParams,Link} from 'react-router-dom'
import {Typography,Box} from '@mui/material'
import { Button } from "@mui/material"
import { Container } from "@mui/material"

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
                <Link to="/" >
                <Button>
                    Back to movies    
                </Button>    
                </Link>
            </Box>
        )
    }

    const {Poster:image,Title:title,Plot:description,Year:imdb_date} = movie
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img src={image} alt={title}/>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h2">
                    {title}
                </Typography>
                <Typography variant="body">
                    {description}
                </Typography>
                <Typography variant="h4">
                    {imdb_date}
                </Typography>
                <Link to="/">
                    <Button>
                        Back to movies
                    </Button>
                </Link>
            </Grid>
        </Grid>
    )
}