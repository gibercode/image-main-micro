import React, { lazy } from "react";
import { MainLayout } from "./components";
import "./styles.css";
const SearchBar = React.lazy(() => import("searchBar/SearchBar"));
const List = React.lazy(() => import("list/List"));

const App = () => {
  return (
    <MainLayout>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
        <List />
      </React.Suspense>
    </MainLayout>
  );
};

export default App;
