"use client";

import Map from "ol/Map.js";
import View from "ol/View.js";
import { always } from "ol/events/condition.js";
import GeoJSON from "ol/format/GeoJSON.js";
import Select from "ol/interaction/Select.js";
import VectorLayer from "ol/layer/Vector.js";
import { fromLonLat } from "ol/proj.js";
import VectorSource from "ol/source/Vector.js";
import "@/app/styles/mapStyle.css";

export const TravelMap = () => {
  const select = new Select({
    toggleCondition: always,
    multi: true,
  });

  const vector = new VectorLayer({
    background: "white",
    source: new VectorSource({
      url: "https://openlayers.org/data/vector/us-states.json",
      format: new GeoJSON(),
    }),
  });

  const map = new Map({
    layers: [vector],
    target: "map",
    view: new View({
      center: fromLonLat([-100, 38.5]),
      zoom: 4,
      multiWorld: true,
    }),
  });
  map.addInteraction(select);

  const status = document.getElementById("status");

  select.on("select", function () {
    status.innerHTML =
      "&nbsp;" + select.getFeatures().getLength() + " selected features";
  });

  return <div id="map" className="map"></div>;
};
