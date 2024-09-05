import React from "react";
import { MainLayout } from "./components";
import "./styles.css";

const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}></React.Suspense>
    </MainLayout>
  );
};

export default App;
