import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return(
        <div className="w-48 pr-7">
            <img alt="Movie card " 
            src={IMG_CDN_URL+ posterPath}/>
        </div>
    )
};

export default MovieCard;