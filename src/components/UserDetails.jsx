import React from 'react'

export default function UserDetails( props ) {

    let { onGetData } = props

    let phone = " 012345679"
    onGetData( phone )

    return (
        <div className='bg-light container mt-5 p-5'>

            <h1>Username : Ahmed</h1>
            <p className='lead fs-4 mt-3'>Phone :{phone}</p>
        </div>
    )
}
