import React from 'react';

function Band(props) {
    const { band_name, fans, formed, origin } = props
    return (
        <div className="band">
            <h3> { band_name } </h3>
            <div>Formed: { formed } </div>
            <div>{ origin }</div>
            <div>Fans: { fans }</div>
        </div>
    )
}

export default Band;