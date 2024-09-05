import React, { ReactNode } from "react";
import { Menu } from "antd";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Menu mode="horizontal" style={{ padding: "0.625rem 1rem" }}>
        <h3>Search wallpaper images</h3>
      </Menu>
      <div className="content">{children}</div>
    </>
  );
};
