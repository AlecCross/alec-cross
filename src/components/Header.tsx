import React from "react";

const Header = () => {
  return (
    <div style={{display: "flex", border: 20, background: "purple"}}>
      <div>
        <div>Oleksandr Krasivskyi</div>
        <div>Fullstack JS Developer</div>
      </div>
      <div style={{textAlign:"right"}}>
        <div>34 y.o.</div>
        <div>Ukraine</div>
        <div>+380 00 000 00 00</div>
        <div>contact@emai.com</div>
        <div>github</div>
        <div>linkedin.com</div>
        <div>alec-cross.vercel.app</div>
      </div>
    </div>
  );
};

export default Header;
