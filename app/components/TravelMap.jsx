"use client";

import { useEffect, useRef } from "react";
import Map from "ol/Map.js";
import View from "ol/View.js";
import { always } from "ol/events/condition.js";
import GeoJSON from "ol/format/GeoJSON.js";
import Select from "ol/interaction/Select.js";
import VectorLayer from "ol/layer/Vector.js";
import TileLayer from "ol/layer/Tile.js";
import OSM from "ol/source/OSM.js";
import { fromLonLat } from "ol/proj.js";
import VectorSource from "ol/source/Vector.js";
import { Style, Stroke, Fill } from "ol/style.js";

export const TravelMap = ({ isVectorLayerVisible }) => {
  const mapRef = useRef(null);
  const vectorLayerRef = useRef(null);
  const totalCountries = 195;

  useEffect(() => {
    if (!mapRef.current) return;

    const select = new Select({
      toggleCondition: always,
      multi: true,
      style: new Style({
        stroke: new Stroke({
          color: "#228B22",
          width: 3,
        }),
        fill: new Fill({
          color: "rgba(34, 139, 34, 0.3)",
        }),
      }),
    });

    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const vector = new VectorLayer({
      source: new VectorSource({
        url: "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson",
        format: new GeoJSON(),
      }),
      style: new Style({
        stroke: new Stroke({
          color: "#319FD3",
          width: 2,
        }),
        fill: new Fill({
          color: "rgba(255, 255, 255, 0.1)",
        }),
      }),
      visible: isVectorLayerVisible,
    });

    vectorLayerRef.current = vector;

    let actualCountryCount = totalCountries;
    vector.getSource().on("featuresloadend", function () {
      actualCountryCount = vector.getSource().getFeatures().length;
    });

    const map = new Map({
      layers: [osmLayer, vector],
      target: mapRef.current,
      view: new View({
        center: fromLonLat([0, 20]),
        zoom: 2,
      }),
    });

    map.addInteraction(select);

    const status = document.getElementById("status");
    if (status) {
      select.on("select", function () {
        const selectedCount = select.getFeatures().getLength();
        const percentage = Math.round(
          (selectedCount / actualCountryCount) * 100,
        );
        status.innerHTML =
          "&nbsp;" +
          percentage +
          "% - " +
          selectedCount +
          " of " +
          actualCountryCount +
          " countries visited";
      });
    }

    return () => {
      map.setTarget(null);
    };
  }, []);

  useEffect(() => {
    if (vectorLayerRef.current) {
      vectorLayerRef.current.setVisible(isVectorLayerVisible);
    }
  }, [isVectorLayerVisible]);

  return (
    <div className="map-container relative w-full h-full">
      <div ref={mapRef} className="map w-full h-full"></div>
      <div
        id="status"
        className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded shadow-md text-sm z-40"
      >
        &nbsp;
      </div>
    </div>
  );
};
