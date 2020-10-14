import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { FiPlus, FiArrowRight } from "react-icons/fi";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "../styles/pages/orphanages-map.css";
import mapMakerImg from "../images/map-marker.svg";
import mapIcon from "../utils/mapIcon";


function OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMakerImg} alt="Marcador" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>
                <footer>
                    <strong>Goiás</strong>
                    <span>Anápolis</span>
                </footer>
            </aside>

            <Map
                center={[-16.3326237, -48.9536484]}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                    icon={mapIcon}
                    position={[-16.3326237, -48.9536484]}>
                    <Popup className="map-popup" closeButton={false} minWidth={240} maxWidth={240}>
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div >
    )
}

export default OrphanagesMap;