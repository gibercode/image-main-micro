import React from "react";
import { MainLayout } from "./components";
import "./styles.css";
const SearchBar = React.lazy(() => import("searchBar/SearchBar"));

const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </React.Suspense>
    </MainLayout>
  );
};

export default App;
