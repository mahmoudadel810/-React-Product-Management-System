import { useState } from "react";
import Login from "../components/Login";
import UserDetails from "../components/UserDetails";


export function Home() {
    let [ show, setShow ] = useState( false )


    let [ userPhone, setUserPhone ] = useState( '' )
    let onGetData = ( data ) => {
        setUserPhone( data )

    }
    let loginHandler = () => {
        setShow( true )
    }
    return (
        <div className="container mt-5">
            <h1>Phone : {userPhone}</h1>
            <UserDetails onGetData={onGetData} />

        </div>
    )
}
