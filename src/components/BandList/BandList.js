import React from 'react';
import Band from '../Band/Band';
import data from '../../MetalMeta.js';

function BandList() {
    const bands = data.map(({ ID, band_name, fans, formed, origin, split, style }) => {
        return (
            <Band
                key = {ID}
                band_name = {band_name}
                formed = {formed}
                origin = {origin}
                fans = {fans}
            />
        )
    })

    return (
        <div className = "BandList">
            <h2>Bands: { bands.length }</h2>
            <div className="Bands">
                { bands }
            </div>
        </div>
    )
}

export default BandList;