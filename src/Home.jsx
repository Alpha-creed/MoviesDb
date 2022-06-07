import { Movies } from "./Movies"
import { SearchForm } from "./SearchForms"

export const Home = ()=>{
    return(
        <main>
            <SearchForm/>
            <Movies/>
        </main>
    )
}