import React, { useEffect, useState } from 'react'

export function Counter() {



    let [ count, setCount ] = useState( 0 );

    let [ title, setTitle ] = useState( 'Counter app' )



    /**
     * == componentDidMount
     * == no second parsms -- 
     * == [] == ComponentDidMount (only One)
     * == [stateName] == ComponentDidMount & componentDidUpdate [stateName]
     * == [StateName1,stateName2] =  ComponentDidMount & componentDidUpdate [stateName1,state2]
     * 
     */
    useEffect( () => {
        console.log( "connect with api" )
        console.log( "--------------------" )


    } )
    // useEffect( () => {
    //     console.log( "ComponentDidMount" )
    //     console.log( "ComponentDidUpdate" )
    //     console.log( "--------------------" )
    // }, [ count, title ] )


    let increase = () => setCount( count + 1 )

    let decrease = () => setCount( count - 1 );

    let changeTitle = () => {
        setTitle( "New Title" )
    }

    return (
        <div className='p-5 container mt-5 border'>

            {console.log( "Render" )}

            <h1>{title}</h1>

            <p className='lead fs-3 mt-3'>Count :<strong className='text-danger'>{count} </strong></p>

            {/* {count <= 0 && <p className='alert alert-danger'>Count Value less than Zero</p>} */}
            {/* {( count >= 0 ) ? <p className='alert alert-success'>Count 0</p> : <p className='alert alert-danger'>Count Value less than Zero</p>} */}
            <button onClick={changeTitle} className='btn btn-dark mx-2'>ChangeTitle</button>
            <button onClick={increase} className='btn btn-success mx-2'>Increase</button>
            <button onClick={decrease} className='btn btn-danger mx-2'>decrease</button>
        </div>
    )
}





