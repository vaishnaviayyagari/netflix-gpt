
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
  
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
            {
                /*
                Main Container
                    -Video background
                    -Video Title
                SecondaryContainer
                    -MovieList*n
                    -cards * n
                */
            }
        </div>
    )
}

export default Browse;