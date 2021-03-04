import React from 'react';
import Band from '../Band/Band';
import './BandList.css';
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
        <div className = "BandLength">
             <h2>Bands: { bands.length }</h2>
                <div className = "BandList">
                    { bands }
                </div>
        </div>
    )
}

export default BandList;