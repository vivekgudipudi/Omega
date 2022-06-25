import '../App.css';
import {NavLink } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { UseExplore } from '../contexts/explore-context';


export const NavBar = ()=> {

    const { isLoggedIn,setIsLoggedIn } = useAuth();
    // const navigate = useNavigate();
    const { dispatch } = UseExplore()

    const loginClickHandler = () => { if(isLoggedIn){
        window.location.reload(false);
        setIsLoggedIn(!isLoggedIn);
        
    }
    }

    return(
        <nav className="nav-container flex-row align-center">
        <div className="nav-brand t2 bold"><NavLink style = {{color : '#1f2937'}} to = '/' >OMEGA</NavLink></div>
        <div className="nav-categories-container">
            <ul className="nav-categories-list flex-row justify-center">
                <li className="nav-category-pill"><NavLink to ='/' onClick={() => dispatch({ type: "TOGGLE_CATEGORY",payload : 'MOBILES' })}>Mobiles</NavLink></li>
                <li className="nav-category-pill" ><NavLink to ='/' onClick={() => dispatch({ type: "TOGGLE_CATEGORY",payload : 'LAPTOPS' })}>Laptops</NavLink></li>
                <li className="nav-category-pill" ><NavLink to ='/' onClick={() => dispatch({ type: "TOGGLE_CATEGORY",payload : 'GADGETS' })}>Gadgets</NavLink></li>
            </ul>
        </div>
        <div className="nav-shop-items">
            <ul className="nav-categories-list flex-row semi-bold">
                <li className="nav-category-pill">
                    <NavLink to = '/login' onClick={ loginClickHandler } >{isLoggedIn ? "Logout" : "Login"}</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

