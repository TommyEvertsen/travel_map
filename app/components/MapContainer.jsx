"use client";

import { useState } from "react";
import { TravelMap } from "./TravelMap";
import Sidebar from "./Sidebar";

export const MapContainer = () => {
  const [isVectorLayerVisible, setIsVectorLayerVisible] = useState(true);

  const toggleVectorLayer = () => {
    setIsVectorLayerVisible(!isVectorLayerVisible);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        isVectorLayerVisible={isVectorLayerVisible}
        onToggleVectorLayer={toggleVectorLayer}
      />
      <div className="flex-1">
        <TravelMap isVectorLayerVisible={isVectorLayerVisible} />
      </div>
    </div>
  );
};
