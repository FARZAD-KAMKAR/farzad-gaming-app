import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Scrolltop = () => {
  const pathname = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
