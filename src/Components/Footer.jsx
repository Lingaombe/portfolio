import React from 'react'
import Wave from 'react-wavify'
import './comps.css'

export default function Footer(){
    return(
        <footer>
            <Wave fill="url(#gradient)">
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%"  stopColor="rgb(67, 138, 225)" />
                <stop offset="90%" stopColor="rgb(27, 106, 203)" />
                </linearGradient>
            </defs>
            </Wave>
        </footer>
    )
}