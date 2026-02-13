const Sidebar = ({ isVectorLayerVisible, onToggleVectorLayer }) => {
  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 shadow-lg z-50 flex-shrink-0">
      <div className="p-4">
        <h1 className="text-xl font-bold text-gray-800">Travel Map</h1>
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-4">
            Select countries you've visited!
          </p>

          <div className="border-t pt-4">
            <h2 className="text-md font-semibold text-gray-700 mb-3">
              Map Layers
            </h2>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="text-sm font-medium text-gray-700">
                Country Borders
              </span>
              <button
                onClick={onToggleVectorLayer}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isVectorLayerVisible ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isVectorLayerVisible ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
