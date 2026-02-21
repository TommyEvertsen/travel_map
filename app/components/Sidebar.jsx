const Sidebar = ({
  isTravelLayerVisible,
  onToggleVectorLayer,
  openSidebar,
  setIsOpenSidebar,
}) => {
  if (!openSidebar) return null;

  return (
    <div className="largeScreenSideBar  w-46 md:w-64 h-full bg-[#384959] border-r border-gray-200 shadow-lg z-50 flex-shrink-0">
      <div className="p-4 h-full flex flex-col">
        <div className="flex-grow">
          <h1 className="text-xl font-bold text-white">Travel Map</h1>
          <div className="mt-4">
            <p className="text-sm text-white mb-4">
              Select countries you've visited
            </p>

            <div className="border-t pt-4">
              <h2 className="text-md font-semibold text-white mb-3">
                Map Layers
              </h2>

              <div className="flex items-center justify-between   rounded-lg">
                <span className="text-sm font-medium text-white">
                  Travel layer
                </span>
                <button
                  onClick={onToggleVectorLayer}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#bdddfc] focus:ring-offset-2 ${
                    isTravelLayerVisible ? "bg-[#88bdf2]" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      isTravelLayerVisible ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="createdBy text-center mt-auto">
          <p className="text-white text-sm">Developed by </p>
          <a
            href="https://tommyevertsen.github.io/About_me"
            className="text-[#88bdf2] text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tommy Evertsen
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
