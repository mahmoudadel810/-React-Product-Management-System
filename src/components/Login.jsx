import React, { useEffect, useState } from 'react'

export default function Login( props ) {


    let { logout } = props

    useEffect( () => {



    }, [] )


    return (
        <div className='container mt-5'>
            {console.log( "Render Inside Login" )}
            <div className='alert alert-success p-5'>
                <h1>Hello : Ali</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, magni! Ipsum similique laudantium cumque praesentium, tenetur libero ab officia vel! Doloremque, laborum! Enim neque voluptates reprehenderit voluptate accusantium! Assumenda, illo?</p>
                <button onClick={logout} className='btn btn-danger'>Logout</button>

            </div>
        </div>
    )
}
