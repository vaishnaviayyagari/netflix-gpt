import { useRef, useState } from "react";
import Header from "./Header";
import {checkValidData} from "../utils/validate";
import {createUserWithEmailAndPassword ,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const[IsSignIn,setSignIn] = useState(true);
    const [errorMessage,setErrorMesssage] = useState(null)
    const email = useRef(null);
    const password = useRef(null);
    const handlerSignIn = () => {
        setSignIn(!IsSignIn);
    }
    const handleButtonClick = () => {
        //validate the form data
         const message = checkValidData(email.current.value,password.current.value);
        setErrorMesssage(message);
        if(message) return;
        //sign in and sign up Logic here
        if(!IsSignIn){
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    //console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode + " " + errorMessage);
                    navigate("/");
                    // ..
                });
        }else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMesssage(errorCode+ "" + errorMessage);
            });
        }
        
    }
    return(
        <div className="
        ">
            <Header/>
            <div className="absolute w-full">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_large.jpg"
                alt="bg-image"></img>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className=" p-12 bg-black w-3/12 mx-auto absolute my-36  right-0 left-0 text-white  bg-opacity-80">
                <h2 className="font-bold text-3xl py-4">{IsSignIn? "Sign In":"Sign Up"}</h2>
                {!IsSignIn && <input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-600 rounded-lg"/>}
                <input ref={email} type="text" placeholder="EMail Address" className="p-4 my-4 w-full bg-gray-600 rounded-lg"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600 rounded-lg"/>
                <p className="text-red-600 text-lg py-2 font-bold">{errorMessage}</p>
                <button className=" py-4 my-6 bg-red-700 w-full rounded-lg"
                onClick={handleButtonClick}>{IsSignIn? "Sign In":"Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={handlerSignIn}>{IsSignIn?"Are you new to Netflix? Sign up now":
                    "Already Registered? Sign in now"}</p>
            </form>
        </div>
    
    )
}
export default Login;