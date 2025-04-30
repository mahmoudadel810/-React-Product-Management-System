import { useEffect, useState } from "react";
import Login from "../components/Login";
import UserDetails from "../components/UserDetails";


export function Home() {
    let [ show, setShow ] = useState( false )

    let loginHandler = () => {
        setShow( true )
    }

    let logout = () => {
        setShow( false )
    }
    useEffect( () => {
        console.log( "Effect inside home" )

        return () => {
            console.log( "Clean up at Home" )
        }
    }, [ show ] )
    return (
        <div className="container mt-5">
            {console.log( "Render inside Home" )}
            {!show && <button onClick={loginHandler} className='btn btn-dark mb-4'>login</button>}
            {show && <Login logout={logout} />}
        </div>
    )
}
