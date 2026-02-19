"use client";

import { useState } from "react";
import { TravelMap } from "./TravelMap";
import Sidebar from "./Sidebar";
import Header from "./Header";

export const MapContainer = () => {
  const [isTravelLayerVisible, setIsTravelLayerVisible] = useState(true);
  const [openSidebar, setIsOpenSidebar] = useState(false);

  const toggleTravelLayer = () => {
    setIsTravelLayerVisible(!isTravelLayerVisible);
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header openSidebar={openSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      <div className="relative flex-1">
        <div className="absolute inset-0">
          <TravelMap isTravelLayerVisible={isTravelLayerVisible} />
        </div>
        <div className="absolute top-0 left-0 z-50 h-full">
          <Sidebar
            isTravelLayerVisible={isTravelLayerVisible}
            onToggleVectorLayer={toggleTravelLayer}
            openSidebar={openSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          />
        </div>
      </div>
    </div>
  );
};
