import React from "react";

export const SocialMediaLinks = ({ children, url }) => {
  return (
    <a className="text-light me-4 fs-4 " href={url}>
      <span className="footer-text-color-grey">{children}</span>
    </a>
  );
};
