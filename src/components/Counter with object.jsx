import React, { useState } from 'react'

export function Counter2() {



    const [ state, setState ] = useState( {
        count: 0,
        title: 'Counter Component'
    } );

    let increase = () => {
        setState( {
            ...state,
            count: state.count + 1
        } )
    }

    let decrease = () => {
        setState( {
            ...state,
            count: state.count - 1
        } )
    }
    let changeTitle = () => {
        setState( {
            ...state,
            title: "New Title"
        } )

    }

    return (
        <div className='p-5 container mt-5 border'>

            {console.log( "Render" )}

            <h1>{state.title}</h1>

            <p className='lead fs-3 mt-3'>Count :<strong className='text-danger'>{state.count} </strong></p>

            <button onClick={changeTitle} className='btn btn-dark mx-2'>ChangeTitle</button>
            <button onClick={increase} className='btn btn-success mx-2'>Increase</button>
            <button onClick={decrease} className='btn btn-danger mx-2'>decrease</button>
        </div>
    )
}





