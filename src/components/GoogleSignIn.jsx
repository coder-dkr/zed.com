import React,{useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {
    const navuser = useNavigate()
    const { loginWithRedirect, isAuthenticated } = useAuth0()

    useEffect(() => {
        {isAuthenticated && navuser("/guest_user_home")}
       
    }, [])

    return (
      
        <>
          

            <div onClick={e => loginWithRedirect()} className="continueWith Google bg-white text-black rounded-3xl flex justify-center items-center  py-2 w-[300px] h-[40px] cursor-pointer hover:bg-yellow-200 lg:h-[43px]">
                <span><img src="img/google.webp" alt="" className="w-[1.3rem] ml-2.5" /></span>
                <span className="text-base font-sans pl-3">Sign up with Google</span>
            </div>
        </>
    )
}

export default GoogleSignIn
