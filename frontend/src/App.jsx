import React, { useState } from "react";

import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";

import "./App.scss";

const App = () => {
  const [modal, setModal] = useState({ isOpen: false });

  return (
    <div className="App">
      <HomeRoute setModal={setModal} />
      {modal.isOpen && (
        <PhotoDetailsModal photo={modal.photo} setModal={setModal} />
      )}
    </div>
  );
};

export default App;
