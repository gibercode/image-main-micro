import React from "react";
import { MainLayout } from "./components";
const SearchBar = React.lazy(() => import("searchBar/SearchBar"));
import "./styles.css";

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
