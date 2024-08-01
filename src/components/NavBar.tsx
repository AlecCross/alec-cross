import React from "react";
import Link from "../../node_modules/next/link";

const NavBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ padding: 5 }}>
        <Link href="/">Home</Link>
      </div>
      <div style={{ padding: 5 }}>
        <Link href="http://alec-cross.vercel.app/resume/">Resume</Link>
      </div>
      <div style={{ padding: 5 }}>
        <Link href="http://alec-cross.vercel.app/portfolio/">Portfolioo</Link>
      </div>
    </div>
  );
};

export default NavBar;
