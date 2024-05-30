import React from "react";
import conf from "../../conf/conf";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={conf.scribblrLogo} className="w-10" />
      <p className="font-serif mt-1">Scribblr</p>
    </div>
  );
};

export default Logo;
