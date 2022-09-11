import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import PropTypes from "prop-types";
import "./Map.css";

export default function Map ({ latitude, longtitude }) {

  return (
    <>
      <MapContainer
        center={[latitude, longtitude]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div>Lines:</div>
    </>
  );
};

Map.propTypes = {
  longtitude: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
};
