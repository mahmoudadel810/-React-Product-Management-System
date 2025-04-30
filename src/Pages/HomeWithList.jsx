import React from 'react'

import { TrackCard } from '../components/trackCard'
import { itiTracks } from '../models/tracksList'
export function Home() {
    const allTracks = itiTracks.map( ( track ) => <TrackCard key={track.id} {...track} /> );

    return (
        <>
            {allTracks && allTracks}
        </>
    )
}
