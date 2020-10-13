import React from "react";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import mapMakerImg from "../images/map-marker.svg";
import "../styles/pages/orphanages-map.css"


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
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div >
    )
}

export default OrphanagesMap;