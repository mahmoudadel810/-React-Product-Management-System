

export function Content( props ) {



    let clickHandler = () => {
        console.log( "Hello" )
    }
    let { trackName, sup, children } = props
    console.log( props )


    return (
        <div className="border container p-5 m-3">
            <h2>TrackName : {trackName}</h2>
            <p className="lead fs-3">Supervisior Name : {sup}</p>
            {children}
            <button onClick={clickHandler}>Show More</button>
        </div>
    )
}


