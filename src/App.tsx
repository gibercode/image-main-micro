import React from "react";
import { MainLayout } from "./components";
import { Spin } from "antd";
import "./styles.css";

const SearchBar = React.lazy(() => import("searchBar/SearchBar"));
const List = React.lazy(() => import("list/List"));

const App = () => {
  return (
    <MainLayout>
      <React.Suspense
        fallback={
          <div className="spinnerContainer">
            <Spin size="large" />
          </div>
        }
      >
        <SearchBar />
        <List />
      </React.Suspense>
    </MainLayout>
  );
};

export default App;
