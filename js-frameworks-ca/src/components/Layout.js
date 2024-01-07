import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children, cartItemCount }) {
  return (
    <div>
      <Header cartItemCount={cartItemCount} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
