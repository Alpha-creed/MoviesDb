import { Box } from "@mui/material"
import { Grid } from "@mui/material"
import { ImageList } from "@mui/material"
import { ImageListItem } from "@mui/material"
import { ImageListItemBar } from "@mui/material"
import { Container } from "@mui/material"
import { Typography,Link } from "@mui/material"
// import { Link } from "react-router-dom"
import { useGlobalContext } from "./Context"

const url = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
export const Movies = () =>{
    const {movies,isLoading} = useGlobalContext()

    if(isLoading){
        return <Typography></Typography>
    }

    return (
            <Container>
            <Grid container spacing={{xs:8,md:3 ,sm:10}}  columns={{ xs: 4, sm: 8, md: 8 }}>
            {movies.map((movie,index)=>{
                const {imdbID:id,Poster:poster,Title:title,Year:year} = movie
               return(
               <Link href={`/movies/${id}`} key={id}>
                    <Grid item xs={2} sm={4} md={2} key={index}>
                        <Box>
                            <ImageList sx={{width:500,height:250}}>
                                <ImageListItem >
                                <img
                                        src={`${poster ==='N/A'?url:poster}?w=248&fit=crop&auto=format`}
                                        style={{width:250,height:150}}
                                        alt={title}
                                        loading="lazy"
                                        // onMouseEnter={setFocus(true)}
                                        // onMouseLeave={setFocus(false)}
                                    />
                                    <ImageListItemBar
                                title={title}
                                // sx={{display:!focus?"none":"block"}}
                                subtitle={year}
                                />
                                </ImageListItem>
                            </ImageList>
                        </Box>
                    </Grid>
                 </Link>
            )})}
            </Grid>
        </Container>
    )
}