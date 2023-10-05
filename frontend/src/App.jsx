import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";

import "./App.scss";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="App">
      <HomeRoute setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <PhotoDetailsModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default App;
