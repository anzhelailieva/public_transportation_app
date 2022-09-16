import { useDispatch, useSelector } from "react-redux";
import { getMapData } from "../../../../store/map-actions";
import Map from "../../../Map/Map";
import Lines from "../Lines/Lines";
import React from "react";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useDispatch();
  const stopsCoordinates = useSelector((state) => state.map.stops);
  const segments = useSelector((state) => state.map.segments);

  useEffect(() => {
    dispatch(getMapData());
  }, [dispatch]);

  return (
    <>
      <Lines />
      <Map coordinates={stopsCoordinates} segments={segments} />
    </>
  );
}
