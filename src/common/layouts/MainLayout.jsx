import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="main flex justify-center ">
        <div className="2xl:container w-full h-full flex:col justify-center ">
          <Nav />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
