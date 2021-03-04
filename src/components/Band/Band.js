import React from 'react';
// import Like from '../Like/Like'
import './Band.css';

function Band(props) {
    const { band_name, fans, formed, origin } = props
    return (
        <div className="Band">
            <h3> { band_name } </h3>
            <p>Formed: { formed } </p>
            <p>{ origin }</p>
            <p>Fans: { fans }</p>
        </div>
    )
}

export default Band;