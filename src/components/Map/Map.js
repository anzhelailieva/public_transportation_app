import { MapContainer, Marker, TileLayer, Polyline } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";
import "./Map.css";

export default function Map({ coordinates, segments }) {
  const limeOptions = { color: "lime" };
  const markerIcon = L.icon({
    iconUrl: require("../../icons/bus-stop.png"),
    iconSize: [35, 35],
  });

  return (
    <>
      <MapContainer
        center={[42.698334, 23.319941]}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map((item, index) => {
          if (item.location.lat && item.location.lon) {
            return (
              <Marker
                key={`${item.id}-${index}`}
                icon={markerIcon}
                position={[item.location.lat, item.location.lon]}
              />
            );
          }
          return null;
        })}
        <Polyline
          pathOptions={limeOptions}
          positions={segments}
          eventHandlers={{
            click: (e) => {
              console.log("marker clicked", e);
            },
          }}
        />
      </MapContainer>
    </>
  );
}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.object).isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};
