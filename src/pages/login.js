import { useState } from 'react';
import { NavLink,useNavigate,useLocation  } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import axios from "axios";


export const Login = ()=> {
    const { setIsLoggedIn } = useAuth();
    const [credentials,setCredentials] = useState({email: "", password : ""})
    const navigate = useNavigate();
    const location = useLocation()

    const loginHandler = async (e,email,password)=>{ 
        e.preventDefault();
        try{
            const response = await axios.post(`/api/auth/login`, {
                email,
                password
            })
            
            if (response.status === 200){
                localStorage.setItem("token", response.data.encodedToken);
                setIsLoggedIn((login)=> !login)
            }
            navigate(location?.state?.from.pathname || "/", { replace: true });
        }
        catch(error){
            console.log(error.response)
        }
    }


    return (
        <>
        <hr/>
        <div className="container-sign-in justify-center align-center">
            <form className="form-sign-in" onSubmit={(e)=>loginHandler(e,credentials.email,credentials.password)} >
                <div className="heading-sign-in t3 bold">LOGIN</div><hr/>
                <div className="sub-heading-sign-in light">Enter your details.</div><hr/>
                <div className="input-box-sign-in">
                    <input type="email" placeholder="Email"  onChange={(e)=>setCredentials((a)=>({...a, email: e.target.value}))}/>
                    <input type="password" placeholder="Password" onChange={(e)=>setCredentials((a)=>({...a, password: e.target.value}))}/>
                </div>
                <div className="btn-box-sign-in">
                    <input type = "submit" value = "LOG IN" className="btn btn-sign-in"/>
                </div><br/>
                <div className="btn-box-sign-in">
                    <input type = "submit" value = "SIGN IN AS GUEST" onClick={(e)=> {
                        setCredentials((a)=>({...a,email : "test@gmail.com",password : "testing"}))
                    }} className="btn btn-sign-in"/>
                </div>
                <div className="login-text"> 
                <NavLink to="/signup">Don't have an account?<span className="login-text" >Create here..</span>
                </NavLink>
                </div>
                <hr/>
                <div className="login-text-other-ways flex-column">
                    other ways to login
                    <div className="auth-icon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" className="google-icon" alt="Google"/>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}