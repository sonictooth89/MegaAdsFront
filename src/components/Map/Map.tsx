import React from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import '../../utils/fix-map-icon';

import 'leaflet/dist/leaflet.css';
import './Map.css';

export const Map = () => {
    return (
        <div className="map">
            <MapContainer center={[48.8353952,9.3221945]} zoom={13}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"    
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[48.8353952,9.3221945]}>
                    <Popup>
                        <h2>ALS 65</h2>
                        <p>my house</p>
                    </Popup>
                </Marker>

                <Marker position={[49.975355, 20.910033]}>
                    <Popup>
                        <h2>Domek</h2>
                        <p>my house in Poland</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}