import { useState } from "react";
import { HashRouter } from "react-router-dom";
import PageRoutes from "./routes/PageRoutes";



function App() {
  return (
    <>
      <HashRouter>
        <PageRoutes/>
      </HashRouter>
    </>
  );
}

export default App;
