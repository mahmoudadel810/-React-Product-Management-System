import React from 'react'

export function TrackCard( props ) {


    console.log( props )


    return (
        <div className='border mt-5 container p-4'>
            <h1>TrackName :{props.name} </h1>
            <p>Super : {props.sup} </p>
            <p>Number of Students :{props.numOfStudents} </p>
            <h3>Course List</h3>
            <ul>
                {props.courseList.map( ( course, index ) => <li key={index}>{course}</li> )}
            </ul>
        </div>
    )
}
