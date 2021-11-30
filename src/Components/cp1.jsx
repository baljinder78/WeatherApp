import React from 'react'
import { Link } from 'react-router-dom'
function cp1() {
    return (
        <div>
            <h1>CP1</h1>
            <h1><Link to="/cp2">GO to CP2</Link></h1>
        </div>
    )
}

export default cp1
