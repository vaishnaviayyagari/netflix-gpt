import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Header  = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store=>store.user);

    const handleSignOut = () =>{
        signOut(auth).then(() => {
            
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL} = user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
              navigate("/browse");
              // ...
            } else {
              // User is signed out
              dispatch(removeUser());
              navigate("/");
            }
          });
          return ()=>unsubscribe();
    },[])
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from from-black z-10 w-screen flex justify-between">
            <img className="w-40" src={LOGO} alt="logo"></img>
            {user &&
            <div>
                <img alt="usericon"
                src={user?.photoURL}/>
                <button onClick={handleSignOut} className="font-bold text-white">Sign Out </button>
            </div>
            }
            
        </div>
          
        
    )
}

export default Header;