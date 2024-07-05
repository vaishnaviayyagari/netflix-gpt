import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
const Header  = () => {
    const navigate = useNavigate();
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
        navigate("/")
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from from-black z-10 w-screen flex justify-between">
            <img className="w-40" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"></img>
            <div>
                <img alt="usericon"
                src="https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"></img>
                <button onClick={handleSignOut} className="font-bold text-white">Sign Out </button>
            </div>
        </div>
          
        
    )
}

export default Header;