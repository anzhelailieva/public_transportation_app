import {
  MapContainer,
  FeatureGroup,
  Marker,
  TileLayer,
  Polyline,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "./leaflet.css";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Map({ stops, routesDataItems }) {
  const routes = useSelector((state) => state.map.filteredRoutes);
  const navigate = useNavigate();

  const routesData = !!routesDataItems
    ? routesDataItems
    : routes.map((item) => ({
        routeId: item.id,
        routeName: item.name,
        segments: item.segments.map((item) => item.coordinates),
        stops: item.stops.map((item) => item),
      }));

  const stopsCoordinates = !!stops
    ? stops
    : routesData.map((item) => item.stops.map((item) => item)).flat();

  const colorOptions = { color: "#E1306C", fillColor: "#E1306C" };
  const markerIcon = L.icon({
    iconUrl: require("../../icons/bus-stop.png"),
    iconSize: [35, 35],
  });

  const handleChangeRoute = (id) => navigate(`/lines/${id}`);

  return (
    <>
      <MapContainer
        center={[42.698334, 23.319941]}
        zoom={14}
        scrollWheelZoom={true}
      >
        <FeatureGroup>
          {stopsCoordinates &&
            stopsCoordinates.map((item, index) => {
              if (item.location.lat && item.location.lon) {
                return (
                  <Marker
                    key={`${item.id}-${index}`}
                    icon={markerIcon}
                    position={[item.location.lat, item.location.lon]}
                  >
                    <Popup>{item.name}</Popup>
                  </Marker>
                );
              }
              return null;
            })}
          {routesData &&
            routesData.map((item, index) => {
              return (
                <Polyline
                  //it's usually not a good practice to put an index as a key, but it should be fine in this case
                  key={`${index}`}
                  pathOptions={colorOptions}
                  positions={item.segments}
                  eventHandlers={{
                    click: () => handleChangeRoute(item.routeId),
                  }}
                />
              );
            })}
        </FeatureGroup>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

Map.propTypes = {
  stops: PropTypes.object,
  routesDataItems: PropTypes.arrayOf(PropTypes.object), 
};