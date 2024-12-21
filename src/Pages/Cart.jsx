import React, { useEffect } from "react";
import { Topheader } from "../components/Topheader";
import { Shoppingcart } from "../components/Shoppingcart";

export const Cart = () => {
  useEffect(() => {
    document.title = "GamerX - Cart";
    document
      .querySelector("meta[name=description]")
      .setAttribute("content", "Cart");
  }, []);

  return (
    <>
      <Topheader
        title="Cart"
        path={[
          { title: "Home", url: "/" },
          { title: "Cart", url: "" },
        ]}
        
      />
      <Shoppingcart/>
    </>
  );
};
